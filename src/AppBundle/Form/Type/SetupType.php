<?php

namespace AppBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class SetupType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('app_name', TextType::class, [
                'constraints' => new NotBlank(),
                'data' => 'Shopkeeper 4'
            ])
            ->add('locale', ChoiceType::class, [
                'label' => 'Main language',
                'choices'  => [
                    'Russian' => 'ru',
                    'English' => 'en'
                ],
                'constraints' => new NotBlank(),
                'data' => 'ru'
            ])
            ->add('mongodb_server', TextType::class, [
                'label' => 'Server',
                'constraints' => new NotBlank(),
                'data' => '127.0.0.1'
            ])
            ->add('mongodb_user', TextType::class, [
                'label' => 'User name',
                'constraints' => new NotBlank()
            ])
            ->add('mongodb_password', TextType::class, [
                'label' => 'Password',
                'constraints' => new NotBlank()
            ])
            ->add('mongodb_database', TextType::class, [
                'label' => 'Database name',
                'constraints' => new NotBlank(),
                'data' => 'shopkeeper4'
            ])
            ->add('admin_email', EmailType::class, [
                'constraints' => new Email()
            ])
            ->add('admin_password', RepeatedType::class, [
                'first_name' => 'password',
                'second_name' => 'confirm',
                'type' => PasswordType::class,
                'invalid_message' => 'The password fields must match.',
                'first_options' => [
                    'label' => 'Password'
                ],
                'second_options' => [
                    'label' => 'Confirm password'
                ],
                'constraints' => [
                    new NotBlank(),
                    new Length(['min' => 6])
                ]
            ]);
    }
}
