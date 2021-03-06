<?php

namespace App\Repository;

use App\MainBundle\Document\Category;
use Doctrine\ODM\MongoDB\Repository\DocumentRepository;

/**
 * CategoryRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CategoryRepository extends DocumentRepository
{
    use BaseRepositoryTrait;

    /**
     * @param $parentId
     * @return mixed
     * @throws \Doctrine\ODM\MongoDB\MongoDBException
     */
    public function getChildCountByParentId($parentId)
    {
        return $this->createQueryBuilder()
            ->field('parentId')->equals($parentId)
            ->count()
            ->getQuery()
            ->execute();
    }

    /**
     * @param $categoryUri
     * @param bool $pop
     * @param string $locale
     * @return array
     * @throws \Doctrine\ODM\MongoDB\MongoDBException
     */
    public function getBreadcrumbs($categoryUri, $pop = true, $locale = '')
    {
        if (empty($categoryUri)) {
            return [];
        }
        $breadcrumbs = [];
        $categoryUri = trim($categoryUri, '/');
        $categoryUriArr = explode('/', $categoryUri);

        $categories = $this->createQueryBuilder()
            ->field('name')->in($categoryUriArr)
            ->field('name')->notEqual('root')
            ->field('isActive')->equals(true)
            ->sort('title', 'asc')
            ->getQuery()
            ->execute()
            ->toArray(false);

        /** @var Category $crumb */
        $crumb = $this->findOneFromArray($categories, 'parentId', 0);
        while (!empty($crumb)) {
            $breadcrumbs[] = $crumb->getMenuData([], $locale);
            $crumb = $this->findOneFromArray($categories, 'parentId', $crumb->getId());
        }

        if (!empty($breadcrumbs) && $pop) {
            array_pop($breadcrumbs);
        }

        return $breadcrumbs;
    }

    /**
     * @param array $items
     * @param string $key
     * @param string $value
     * @return null | mixed
     */
    public function findOneFromArray($items, $key, $value)
    {
        $result = null;
        foreach ($items as $item) {
            $method = 'get' . ucfirst($key);
            if (method_exists($item, $method)) {
                $curVal = call_user_func([$item, $method]);
                if ($curVal === $value) {
                    $result = $item;
                    break;
                }
            }
        }
        return $result;
    }

    /**
     * @param Category $category
     * @param array $parents
     * @return array
     */
    public function getParents(Category $category, $parents = [])
    {
        /** @var Category $parent */
        $parent = $this->findOneBy([
            'id' => $category->getParentId()
        ]);
        if ($parent) {
            $parents[] = $parent;
            if ($category->getParentId() > 0) {
                $parents = $this->getParents($parent, $parents);
            }
        }
        return $parents;
    }
    
    /**
     * @param Category $category
     * @param array $children
     * @param bool $recursive
     * @return array
     */
    public function getChildren(Category $category, $children = [], $recursive = true)
    {
        $childs = $this->findBy(['parentId' => $category->getId()]);
        foreach ($childs as $child) {
            $children[] = $child;
            if ($recursive) {
                $children = $this->getChildren($child, $children);
            }
        }
        return $children;
    }

    /**
     * @param $categoryUri
     * @return array
     * @throws \Doctrine\ODM\MongoDB\MongoDBException
     */
    public function getChildrenByUri($categoryUri)
    {
        return $this->createQueryBuilder()
            ->field('uri')->equals(new \MongoDB\BSON\Regex("^{$categoryUri}", "i"))
            ->sort('parentId', 'asc')
            ->getQuery()
            ->execute()
            ->toArray(false);
    }

    /**
     * @param $categoryUri
     * @return array
     * @throws \Doctrine\ODM\MongoDB\MongoDBException
     */
    public function getChildrenIdsByUri($categoryUri)
    {
        $childCategories = $this->getChildrenByUri($categoryUri);
        return array_map(function($c) {
            /** @var Category $c */
            return $c->getId();
        }, $childCategories);
    }

    /**
     * @param string $sortBy
     * @param string $sortDir
     * @param null $parentId
     * @param array $parentsIdsArr
     * @return array
     */
    public function findActiveAll($sortBy = 'menuIndex', $sortDir = 'asc', $parentId = null, $parentsIdsArr = [])
    {
        $query = $this->createQueryBuilder();
        if (!is_null($parentId)) {
            $query->field('parentId')->equals($parentId);
        } else if (!empty($parentsIdsArr)) {
            $query->field('parentId')->in($parentsIdsArr);
        }
        return $query
            ->field('name')->notEqual('root')
            ->field('isActive')->equals(true)
            ->sort($sortBy, $sortDir)
            ->getQuery()
            ->execute();
    }
}
