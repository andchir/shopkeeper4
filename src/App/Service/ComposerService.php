<?php

namespace App\Service;

use Composer\Composer;
use Composer\Factory;
use Composer\Installer;
use Composer\IO\NullIO;
use Composer\Json\JsonFile;
use Composer\Repository\InstalledFilesystemRepository;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ComposerService
{

    /** @var ContainerInterface */
    protected $container;

    /** @param ContainerInterface $container */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @param string $type
     * @return array
     */
    public function getPackagesList($type = 'library')
    {
        $rootPath = $this->container->getParameter('kernel.project_dir');
        $vendorDir = $rootPath . DIRECTORY_SEPARATOR . 'vendor';
        $repoJsonFile = new JsonFile($vendorDir . '/composer/installed.json');
        if (!$repoJsonFile->exists()) {
            return [];
        }
        $composerRepository = new InstalledFilesystemRepository($repoJsonFile);

        $packages = [];
        foreach ($composerRepository->getPackages() as $package) {
            if ($package->getType() !== $type) {
                continue;
            }
            $packages[] = [
                'name' => $package->getName(),
                'version' => $package->getVersion(),
                'prettyVersion' => $package->getPrettyVersion()
            ];
        }

        usort($packages, function($a, $b) {
            return $a['name'] <=> $b['name'];
        });

        return $packages;
    }

    /**
     * @param string $packageName
     * @param string $version
     * @return array
     * @throws \Exception
     */
    public function requirePackage($packageName, $version)
    {
        $rootPath = $this->container->getParameter('kernel.project_dir');
        $jsonFilePath = $rootPath . DIRECTORY_SEPARATOR . 'composer.json';
        if (!is_writable($jsonFilePath)) {
            return ['success' => false, 'msg' => 'File is not writable.'];
        }

        $composerJson = new JsonFile($jsonFilePath);
        $composerJsonBackup = file_get_contents($composerJson->getPath());

        $requireKey = 'require';
        $decoded = $composerJson->read();
        if (!in_array('', array_keys($decoded[$requireKey]))) {
            $decoded[$requireKey][$packageName] = $version ?: '*';
        }
        file_put_contents($composerJson->getPath(), json_encode($decoded, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        /** @var Composer $composer */
        $composer = Factory::create(new NullIO(), $jsonFilePath);
        /** @var Installer $installer */
        $installer = Installer::create(new NullIO(), $composer);
        $installer
            ->setUpdate(true)
            ->setPreferLowest(true);

        $msg = '';
        try {
            $status = $installer->run();
        } catch (\Exception $e) {
            $status = 1;
            $msg = $e->getMessage();
        }

        if ($status !== 0) {
            file_put_contents($jsonFilePath, $composerJsonBackup);
        }

        return [
            'success' => $status === 0,
            'msg' => $msg
        ];
    }
}
