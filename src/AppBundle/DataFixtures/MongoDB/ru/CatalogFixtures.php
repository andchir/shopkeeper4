<?php

namespace AppBundle\DataFixtures\MongoDB\ru;

use Symfony\Component\EventDispatcher\EventDispatcher;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use AppBundle\Document\FieldType;
use AppBundle\Document\ContentType;
use AppBundle\Document\Category;
use AppBundle\Event\CategoryUpdatedEvent;
use AppBundle\EventListener\CategoryUpdateListener;

class CatalogFixtures extends Fixture
{

    private $dispatcher;

    public function load(ObjectManager $manager)
    {
        $this->dispatcher = $this->container->get('event_dispatcher');
        $categoryUpdateListener = new CategoryUpdateListener();
        $this->dispatcher->addListener(CategoryUpdatedEvent::NAME, [$categoryUpdateListener, 'onUpdated']);

        $this->loadContentType($manager);
        $this->loadCatalog($manager);
    }

    public function loadContentType(ObjectManager $manager) {

        $fields = [
            [
                'title' => 'Название',
                'name' => 'title',
                'description' => '',
                'inputType' => 'text',
                'inputProperties' => [
                    'value' => '',
                    'handler' => ''
                ],
                'outputType' => 'text',
                'outputProperties' => [
                    'className' => '',
                    'chunkName' => 'header3'
                ],
                'group' => 'Основное',
                'required' => true,
                'showInTable' => true,
                'isFilter' => false
            ],
            [
                'title' => 'Системное имя',
                'name' => 'name',
                'description' => '',
                'inputType' => 'system_name',
                'inputProperties' => [
                    'value' => '',
                    'source_field' => 'title',
                    'handler' => ''
                ],
                'outputType' => 'system_name',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Основное',
                'required' => true,
                'showInTable' => true,
                'isFilter' => false
            ],
            [
                'title' => 'Описание',
                'name' => 'description',
                'description' => '',
                'inputType' => 'textarea',
                'inputProperties' => [
                    'value' => '',
                    'handler' => '',
                    'rows' => 6
                ],
                'outputType' => 'textarea',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Основное',
                'required' => false,
                'showInTable' => false,
                'isFilter' => false
            ],
            [
                'title' => 'Цена',
                'name' => 'price',
                'description' => '',
                'inputType' => 'number',
                'inputProperties' => [
                    'value' => '',
                    'handler' => '',
                    'allow_decimals' => 0,
                    'decimal_precision' => 2,
                    'decimal_separator' => '.',
                    'min' => 0,
                    'max' => null,
                    'step' => 1
                ],
                'outputType' => 'number',
                'outputProperties' => [
                    'className' => '',
                    'chunkName' => 'price'
                ],
                'group' => 'Основное',
                'required' => false,
                'showInTable' => true,
                'isFilter' => false
            ],
            [
                'title' => 'Бренд',
                'name' => 'brand',
                'description' => '',
                'inputType' => 'text',
                'inputProperties' => [
                    'value' => '',
                    'handler' => ''
                ],
                'outputType' => 'text',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Параметры',
                'required' => false,
                'showInTable' => false,
                'isFilter' => true
            ],
            [
                'title' => 'Страна',
                'name' => 'country',
                'description' => '',
                'inputType' => 'text',
                'inputProperties' => [
                    'value' => '',
                    'handler' => ''
                ],
                'outputType' => 'text',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Параметры',
                'required' => false,
                'showInTable' => false,
                'isFilter' => true
            ],
            [
                'title' => 'Цвет',
                'name' => 'color',
                'description' => '',
                'inputType' => 'color',
                'inputProperties' => [
                    'value' => '',
                    'handler' => ''
                ],
                'outputType' => 'color',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Параметры',
                'required' => false,
                'showInTable' => false,
                'isFilter' => true
            ],
            [
                'title' => 'Материал',
                'name' => 'material',
                'description' => '',
                'inputType' => 'text',
                'inputProperties' => [
                    'value' => '',
                    'handler' => ''
                ],
                'outputType' => 'text',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Параметры',
                'required' => false,
                'showInTable' => false,
                'isFilter' => true
            ],
            [
                'title' => 'Картинка',
                'name' => 'image',
                'description' => '',
                'inputType' => 'file',
                'inputProperties' => [
                    'value' => '',
                    'handler' => '',
                    'allowed_extensions' => 'image/*',
                    'has_preview_image' => '1'
                ],
                'outputType' => 'file',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Параметры',
                'required' => false,
                'showInTable' => false,
                'isFilter' => true
            ],
            [
                'title' => 'Категории',
                'name' => 'categories',
                'description' => 'Вы можете выбрать несколько категорий для товара.',
                'inputType' => 'categories',
                'inputProperties' => [
                    'value' => '',
                    'handler' => '',
                    'layout' => 'vertical'
                ],
                'outputType' => 'categories',
                'outputProperties' => [
                    'className' => ''
                ],
                'group' => 'Категории',
                'required' => false,
                'showInTable' => false,
                'isFilter' => true
            ]
        ];

        $contentType = new ContentType();
        $contentType
            ->setTitle('Общий')
            ->setName('general')
            ->setDescription('Товары каталога')
            ->setCollection('products')
            ->setFields($fields)
            ->setGroups(['Основное','Параметры','Категории'])
            ->setIsActive(true);

        $manager->persist($contentType);
        $manager->flush();

        $this->addReference('content_type', $contentType);
    }

    public function loadCatalog(ObjectManager $manager)
    {
        $data = [
            [
                'title' => 'Книги',
                'name' => 'knigi',
                'children' => [
                    [
                        'title' => 'Учебная литература',
                        'name' => 'uchebnaya-literatura',
                        'children' => []
                    ],
                    [
                        'title' => 'Художественная литература',
                        'name' => 'khudozhestvennaya-literatura',
                        'children' => []
                    ],
                    [
                        'title' => 'Детям',
                        'name' => 'detyam',
                        'children' => []
                    ]
                ]
            ],
            [
                'title' => 'Одежда, обувь, сумки',
                'name' => 'odezhda-obuv-sumki',
                'children' => [
                    [
                        'title' => 'Oдежда',
                        'name' => 'odezhda',
                        'children' => [
                            [
                                'title' => 'Женская одежда',
                                'name' => 'zhenskaya-odezhda',
                                'children' => [

                                ]
                            ],
                            [
                                'title' => 'Мужская одежда',
                                'name' => 'muzhskaya-odezhda',
                                'children' => [

                                ]
                            ],
                            [
                                'title' => 'Детская одежда',
                                'name' => 'detskaya-odezhda',
                                'children' => [

                                ]
                            ]
                        ]
                    ],
                    [
                        'title' => 'Обувь',
                        'name' => 'obuv',
                        'children' => [
                            [
                                'title' => 'Женская обувь',
                                'name' => 'zhenskaya-obuv',
                                'children' => [

                                ]
                            ],
                            [
                                'title' => 'Мужская обувь',
                                'name' => 'muzhskaya-obuv',
                                'children' => [

                                ]
                            ],
                            [
                                'title' => 'Детская обувь',
                                'name' => 'detskaya-obuv',
                                'children' => [

                                ]
                            ]
                        ]
                    ],
                    [
                        'title' => 'Сумки',
                        'name' => 'sumki',
                        'children' => [
                            [
                                'title' => 'Женские сумки',
                                'name' => 'zhenskie-sumki',
                                'children' => [

                                ]
                            ],
                            [
                                'title' => 'Мужские сумки',
                                'name' => 'muzhskie-sumki',
                                'children' => [

                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];

        $this->loadCategories($manager, $data);
    }

    public function loadCategories(ObjectManager $manager, $data, Category $parent = null) {

        /** @var ContentType $contentType */
        $contentType = $this->getReference('content_type');

        foreach ($data as $item) {
            $category = new Category();
            if (!$parent) {
                $category->setParentId(0);
            } else {
                $category->setParentId($parent->getId());
            }
            $category
                ->setTitle($item['title'])
                ->setName($item['name'])
                ->setDescription('')
                ->setIsActive(true)
                ->setContentTypeName($contentType->getName())
                ->setContentType($contentType);

            $manager->persist($category);
            $manager->flush();

            $event = new CategoryUpdatedEvent($this->container, $category);
            $this->dispatcher->dispatch(CategoryUpdatedEvent::NAME, $event);

            if (!empty($item['children'])) {
                $this->loadCategories($manager, $item['children'], $category);
            }
        }
    }

}
