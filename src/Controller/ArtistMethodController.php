<?php

namespace App\Controller;
use App\Entity\Artist;

class ArtistMethodController
{
    public function __invoke(Artist $data): Artist
    {
        return $data;
    }
}