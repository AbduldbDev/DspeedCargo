<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EmailController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'number' => 'required',
            'subject' => 'required',
            'message' => 'required',
        ]);

        try {
            Mail::to('dspeedcargo@gmail.com')->send(new ContactMail($validated));
            return back()->with('success', 'Your message has been sent successfully!');
        } catch (\Exception $e) {
            return back()->withErrors([
                'mail_error' => 'Sorry, we could not send your message. Please try again later.',
                'details' => config('app.debug') ? $e->getMessage() : null,
            ])->withInput();
        }
    }
}
