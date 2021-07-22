<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\TrackRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=TrackRepository::class)
 */
class Track
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isReadable;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titleShort;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titleVersion;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isUnseen;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $isrc;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $link;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $share;

    /**
     * @ORM\Column(type="integer")
     */
    private $duration;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $trackPosition;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $diskNumber;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $trackRank;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $releaseDate;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isExplicitLyrics;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $explicitContentLyrics;

    /**
     * @ORM\Column(type="integer")
     */
    private $explicitContentCover;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $preview;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $bpm;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $gain;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $availableCountries;

    /**
     * @ORM\OneToOne(targetEntity=Track::class, inversedBy="md5Image", cascade={"persist", "remove"})
     */
    private $alternative;

    /**
     * @ORM\OneToOne(targetEntity=Track::class, mappedBy="alternative", cascade={"persist", "remove"})
     */
    private $md5Image;

    /**
     * @ORM\ManyToOne(targetEntity=Artist::class, inversedBy="tracks")
     * @ORM\JoinColumn(nullable=false)
     */
    private $artist;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIsReadable(): ?bool
    {
        return $this->isReadable;
    }

    public function setIsReadable(?bool $isReadable): self
    {
        $this->isReadable = $isReadable;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getTitleShort(): ?string
    {
        return $this->titleShort;
    }

    public function setTitleShort(string $titleShort): self
    {
        $this->titleShort = $titleShort;

        return $this;
    }

    public function getTitleVersion(): ?string
    {
        return $this->titleVersion;
    }

    public function setTitleVersion(string $titleVersion): self
    {
        $this->titleVersion = $titleVersion;

        return $this;
    }

    public function getIsUnseen(): ?bool
    {
        return $this->isUnseen;
    }

    public function setIsUnseen(?bool $isUnseen): self
    {
        $this->isUnseen = $isUnseen;

        return $this;
    }

    public function getIsrc(): ?string
    {
        return $this->isrc;
    }

    public function setIsrc(?string $isrc): self
    {
        $this->isrc = $isrc;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getShare(): ?string
    {
        return $this->share;
    }

    public function setShare(?string $share): self
    {
        $this->share = $share;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

        return $this;
    }

    public function getTrackPosition(): ?int
    {
        return $this->trackPosition;
    }

    public function setTrackPosition(?int $trackPosition): self
    {
        $this->trackPosition = $trackPosition;

        return $this;
    }

    public function getDiskNumber(): ?int
    {
        return $this->diskNumber;
    }

    public function setDiskNumber(?int $diskNumber): self
    {
        $this->diskNumber = $diskNumber;

        return $this;
    }

    public function getTrackRank(): ?string
    {
        return $this->trackRank;
    }

    public function setTrackRank(?int $trackRank): self
    {
        $this->trackRank = $trackRank;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->releaseDate;
    }

    public function setReleaseDate(?\DateTimeInterface $releaseDate): self
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    public function getIsExplicitLyrics(): ?bool
    {
        return $this->isExplicitLyrics;
    }

    public function setIsExplicitLyrics(bool $isExplicitLyrics): self
    {
        $this->isExplicitLyrics = $isExplicitLyrics;

        return $this;
    }

    public function getExplicitContentLyrics(): ?int
    {
        return $this->explicitContentLyrics;
    }

    public function setExplicitContentLyrics(?int $explicitContentLyrics): self
    {
        $this->explicitContentLyrics = $explicitContentLyrics;

        return $this;
    }

    public function getExplicitContentCover(): ?int
    {
        return $this->explicitContentCover;
    }

    public function setExplicitContentCover(int $explicitContentCover): self
    {
        $this->explicitContentCover = $explicitContentCover;

        return $this;
    }

    public function getPreview(): ?string
    {
        return $this->preview;
    }

    public function setPreview(?string $preview): self
    {
        $this->preview = $preview;

        return $this;
    }

    public function getBpm(): ?float
    {
        return $this->bpm;
    }

    public function setBpm(?float $bpm): self
    {
        $this->bpm = $bpm;

        return $this;
    }

    public function getGain(): ?float
    {
        return $this->gain;
    }

    public function setGain(?float $gain): self
    {
        $this->gain = $gain;

        return $this;
    }

    public function getAvailableCountries(): ?string
    {
        return $this->availableCountries;
    }

    public function setAvailableCountries(?string $availableCountries): self
    {
        $this->availableCountries = $availableCountries;

        return $this;
    }

    public function getAlternative(): ?self
    {
        return $this->alternative;
    }

    public function setAlternative(?self $alternative): self
    {
        $this->alternative = $alternative;

        return $this;
    }

    public function getMd5Image(): ?self
    {
        return $this->md5Image;
    }

    public function setMd5Image(?self $md5Image): self
    {
        // unset the owning side of the relation if necessary
        if ($md5Image === null && $this->md5Image !== null) {
            $this->md5Image->setAlternative(null);
        }

        // set the owning side of the relation if necessary
        if ($md5Image !== null && $md5Image->getAlternative() !== $this) {
            $md5Image->setAlternative($this);
        }

        $this->md5Image = $md5Image;

        return $this;
    }

    public function getArtist(): ?Artist
    {
        return $this->artist;
    }

    public function setArtist(?Artist $artist): self
    {
        $this->artist = $artist;

        return $this;
    }
}
