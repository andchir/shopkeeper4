<?php

namespace AppBundle\Service;

use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ShopCartService
{
    /** @var ContainerInterface */
    protected $container;

    /** @param ContainerInterface $container */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Clear shopping cart data
     */
    public function clearContent()
    {
        $mongoCache = $this->container->get('mongodb_cache');
        $mongoCache->delete(self::getCartId());
    }

    /**
     * @return string
     */
    public static function getCartId()
    {
        $request = Request::createFromGlobals();
        $response = new Response();
        $cookies = $request->cookies->all();
        if (isset($cookies['cart_id'])) {
            return $cookies['cart_id'];
        }
        $cartId = uniqid('shop_cart_' . mt_rand(), true);
        $response->headers->setCookie(new Cookie(
            'cart_id',
            $cartId,
            time() + (60 * 60 * 24 * 7)
        ));
        $response->sendHeaders();
        return $cartId;
    }
}
