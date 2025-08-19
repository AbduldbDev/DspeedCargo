<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmailController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('index');
});

Route::post('/contactus', [EmailController::class, 'send']);

// require __DIR__ . '/settings.php';
// require __DIR__ . '/auth.php';
