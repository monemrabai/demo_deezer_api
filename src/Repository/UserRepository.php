<?php

/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use League\OAuth2\Client\Provider\DeezerResourceOwner;
use League\OAuth2\Client\Provider\ResourceOwnerInterface;

/**
 * This custom Doctrine repository is empty because so far we don't need any custom
 * method to query for application user information. But it's always a good practice
 * to define a custom repository that will be used when the application grows.
 *
 * See https://symfony.com/doc/current/doctrine.html#querying-for-objects-the-repository
 *
 * @author Ryan Weaver <weaverryan@gmail.com>
 * @author Javier Eguiluz <javier.eguiluz@gmail.com>
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    /**
     * Allows to retrieve the user or to create it if it does not exist
     *
     * @param ResourceOwnerInterface $owner
     */

    public function findOrCreateFromOauth(DeezerResourceOwner $owner)
    {
        $user = $this->createQueryBuilder('u')
                    ->where('u.deezerId = :deezerId')
                    ->setParameters([
                        'deezerId' => $owner->getId()
                    ])
                    ->getQuery()
                    ->getOneOrNullResult();
        if($user)
        {
            return $user;
        }

        $user = (new User())
            ->setDeezerId($owner->getId())
            ->setUsername($owner->getName());

        $em = $this->getEntityManager();
        $em->persist($user);
        $em->flush();

        return $user;
    }
}