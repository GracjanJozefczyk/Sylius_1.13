<?php

declare(strict_types=1);

namespace App\Service;

use Sylius\Component\Core\Model\OrderInterface;

final class CustomService
{
    public function customAction(OrderInterface $order): void
    {
        // Your custom logic here
        dump('Custom action executed');
    }
}
