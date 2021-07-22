<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ComplementaryLinkRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=ComplementaryLinkRepository::class)
 */
class ComplementaryLink
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $link;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $share;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $picture;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $pictureSmall;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $pictureMedium;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $pictureBig;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"read:artist"})
     */
    private $pictureXl;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getShare(): ?string
    {
        return $this->share;
    }

    public function setShare(string $share): self
    {
        $this->share = $share;

        return $this;
    }

    public function getPictureSmall(): ?string
    {
        return $this->pictureSmall;
    }

    public function setPictureSmall(string $pictureSmall): self
    {
        $this->pictureSmall = $pictureSmall;

        return $this;
    }

    public function getPictureMedium(): ?string
    {
        return $this->pictureMedium;
    }

    public function setPictureMedium(string $pictureMedium): self
    {
        $this->pictureMedium = $pictureMedium;

        return $this;
    }

    public function getPictureBig(): ?string
    {
        return $this->pictureBig;
    }

    public function setPictureBig(string $pictureBig): self
    {
        $this->pictureBig = $pictureBig;

        return $this;
    }

    public function getPictureXl(): ?string
    {
        return $this->pictureXl;
    }

    public function setPictureXl(string $pictureXl): self
    {
        $this->pictureXl = $pictureXl;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }
}
