<?php

namespace App\Repository;

use App\MainBundle\Document\User;
use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Doctrine\ODM\MongoDB\DocumentRepository;

/**
 * UserRepository
 */
class UserRepository extends BaseRepository implements UserLoaderInterface
{

    /**
     * @param string $email
     * @return array|null|object
     */
    public function loadUserByUsername($email)
    {
        $email = mb_strtolower($email);
        $qb = $this->createQueryBuilder(User::class);
        return $qb
            ->addOr($qb->expr()->field('username')->equals($email))
            ->addOr($qb->expr()->field('email')->equals($email))
            ->getQuery()
            ->getSingleResult();
    }

    /**
     * @param $fieldName
     * @param $value
     * @return mixed
     */
    public function getUsersCountBy($fieldName, $value)
    {
        return $this->createQueryBuilder()
            ->field($fieldName)->equals($value)
            ->getQuery()
            ->execute()
            ->count();
    }

}
