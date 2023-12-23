<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CheckoutRequested extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var string
     */
    public $orderId;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $id)
    {
        $this->orderId = $id;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.checkout-requested')->subject("Solicitud de Proceso de Compra");
    }
}
