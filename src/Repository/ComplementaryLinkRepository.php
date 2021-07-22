<?php

namespace App\Repository;

use App\Entity\ComplementaryLink;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ComplementaryLink|null find($id, $lockMode = null, $lockVersion = null)
 * @method ComplementaryLink|null findOneBy(array $criteria, array $orderBy = null)
 * @method ComplementaryLink[]    findAll()
 * @method ComplementaryLink[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ComplementaryLinkRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ComplementaryLink::class);
    }

    // /**
    //  * @return ComplementaryLink[] Returns an array of ComplementaryLink objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ComplementaryLink
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
