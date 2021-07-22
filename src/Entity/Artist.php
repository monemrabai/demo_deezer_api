<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\ArtistMethodController;
use App\Repository\ArtistRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     attributes={
 *      "order"={"name":"DESC"},
 *     },
 *     paginationItemsPerPage=2,
 *     normalizationContext={"groups"={"read:artist"}},
 *     collectionOperations={"get", "post"},
 *     itemOperations={"get", "put", "delete","top"={"method"="GET","path"="/artists/{id}/top","controller"=ArtistMethodController::class, "read"=false}}
 * )
 *
 * @ApiFilter (
 *     SearchFilter::class,
 *     properties={"name":"partial"},
 * )
 *
 * @ORM\Entity(repositoryClass=ArtistRepository::class)
 */
class Artist
{

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:artist"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     * @Assert\Length(min=3)
     */
    private $name;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups({"read:artist"})
     */
    private $nbAlbum;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"read:artist"})
     */
    private $nbFan;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"read:artist"})
     */
    private $radio;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $tracklist;

    /**
     * @ORM\OneToOne(targetEntity=ComplementaryLink::class, cascade={"persist", "remove"})
     * @Groups({"read:artist"})
     */
    private $complementaryLink;

    /**
     * @ORM\OneToMany(targetEntity=Track::class, mappedBy="artist", orphanRemoval=true)
     * @Groups({"read:artist"})
     */
    private $tracks;

    public function __construct()
    {
        $this->complementaryLink = new ArrayCollection();
        $this->tracks = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getNbAlbum(): ?int
    {
        return $this->nbAlbum;
    }

    public function setNbAlbum(?int $nbAlbum): self
    {
        $this->nbAlbum = $nbAlbum;

        return $this;
    }

    public function getNbFan(): ?int
    {
        return $this->nbFan;
    }

    public function setNbFan(?int $nbFan): self
    {
        $this->nbFan = $nbFan;

        return $this;
    }

    public function getRadio(): ?bool
    {
        return $this->radio;
    }

    public function setRadio(bool $radio): self
    {
        $this->radio = $radio;

        return $this;
    }

    public function getTracklist(): ?string
    {
        return $this->tracklist;
    }

    public function setTracklist(string $tracklist): self
    {
        $this->tracklist = $tracklist;

        return $this;
    }

    public function getComplementaryLink(): ?ComplementaryLink
    {
        return $this->complementaryLink;
    }

    public function setComplementaryLink(?ComplementaryLink $complementaryLink): self
    {
        $this->complementaryLink = $complementaryLink;

        return $this;
    }

    public function getTrack(): ?Track
    {
        return $this->track;
    }

    /**
     * @return Collection|Track[]
     */
    public function getTracks(): Collection
    {
        return $this->tracks;
    }

    public function addTrack(Track $track): self
    {
        if (!$this->tracks->contains($track)) {
            $this->tracks[] = $track;
            $track->setArtist($this);
        }

        return $this;
    }

    public function removeTrack(Track $track): self
    {
        if ($this->tracks->removeElement($track)) {
            // set the owning side to null (unless already changed)
            if ($track->getArtist() === $this) {
                $track->setArtist(null);
            }
        }

        return $this;
    }
}
