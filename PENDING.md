# AnonymousToys Website Pending Fixes

## Development Side

-   Add fields like `is_low_stock`, `is_promoted`, etc. to Product model.
-   Add address field to Order modal.
-   Translation of some text from english to spanish all over the website.
-   Adding sensible links to the footer

## Requirements from client

1. ### Acerca de
    - General introduction to the company.
    - Information about company's values (in points).
    - Information about company's mission (in points).
    - Names and photos of some team members.
1. ### Contacto
    - Correct phone number of company.
    - Correct email of company.
    - Address of company's headquater.
1. ### Emails
    - A name attached with every email: MAIL_FROM_NAME
    - An email attached with every email: MAIL_FROM_ADDRESS
    - Content for mail when `Checkout is requested`
    - Content for mail when `Order is paid and confirmed`
    - Content for mail when `Order is shipped`
    - Content for mail when `Order is delivered`
1. ### Hosting
    - Stripe Credentials:
        - `STRIPE_KEY` from client's stripe account.
        - `STRIPE_SECRET` from client's stripe account.
    - A GCP Api Key with maps enabled.
    - A Mailgun domian with API Key
    - Credentials from AWS account:
        - IAM: `ACCESS_KEY_ID`, `SECRET_ACCESS_KEY`, `DEFAULT_REGION`
        - A `NAME` of S3 Bucket configured with public read access and IAM write access.
    - A laravel hosting provider.


CHECKPOINT - 04/12/2023

Home page

Envios protegidos contra desperfectos
Todos nuestros envios estan protegidos para llegar en las mejores condiciones hasta tu puerta
-> change icon 

Compra protegida
Contamos con una garantía de satisfacción del 100% en tu pedido, contamos con politica de devoluciones
-> change icon

Amplio soporte a nuestros clientes


Pagos seguros


------------------------------------

Misión:
y el mundo garantizando nuestro servicio, variedad y calidad de nuestros productos.

----------------------------------
Products: Clean database


----------------------------------

Contact form, 

Placeholder: Email ID, Change for: Correo electronico
Sujeto , Change for -> Asunto

Please attach your photo -> Adjunta una foto aquí

On physical store mapview, pins are not showed

------------------------------------------------
Admin Panel:

Control Panel Login -> Change for: Panel de administradores
Need access acount credentials please
