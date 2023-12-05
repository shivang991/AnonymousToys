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


#CHECKPOINT - 04/12/2023

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


------------

Checkout Process
Change Quantity for -> Cantidad
Price -> Precio
Checkout -> Continuar Compra
Submit -> Ingresar
Requesting Checkout for -> Solicitud de Proceso de compra
Total Price -> Precio Total
Item Count -> Articulos a comprar
Edit cart -> Modificar Carrito

First email "Checkout Requested"
Checkout Requested change for -> Solicitud de Proceso de Compra
Shivang -> Anonymous Toys
Purchase Requested -> Solicitud de Compra
We have received a purchase request from your email at AnonymousToys. To proceed with the purchase, Click here -> Hemos recibido una solicitud de compra de este correo en Anonymoustoys. Para inciar el proceso por favor da Click Aqui

Please ignore this mail if you did not make such a request. -> Si no fuiste tu por favor ignora este correo


Click here process ----
Paying total of -> Ya casi es tuyo!, tu compra por $_____ MXN
                    Completa los siguientes datos de tu medio de pago y presiona "Pagar" para continuar 

Name on card -> Nombre de la tarjeta
Billing Adress -> Dirección de Pago 
Zip Code -> Codigo Postal

-Can't continue from this part!

-----------------------------------------------------------
#Admin Panel -> Panel de administradores
Post Creator -> Creador de Posts
Product Manager -> Gestor de Productos
Image Carrousel Manager -> Gestor del Carrusel de Imagenes
Customer Service Manager -> Modulo de atención a clientes
User Manager -> Administrador de Usuarios

-------------------------------------------------------------
#Post Creator View
Post Creator -> Crea Aqui tu Post
Enter Tittle -> Titulo de tu Post
Submit -> Ingresar
Previos Posts -> Posts que ya haz creado
------------------------------------------------------------
#Product Manager View
Product Manager -> Gestor de Productos
Image -> Imagen 
Name -> Descripcion
Price -> Precio (MXN)
Add -> Crear
Edit -> Modificar
Remove -> Eliminar
SEARCHBAR NOT WORKINg
-------------------------------------------------------------
#Image Carrousel Manager -> Gestor del Carrusel de Imagenes
Edit -> Modificar
Remove -> Eliminar
Add an Item -> Agregar una Imagen
ADD AN ITEM FORM
Image -> Imagen
Description -> Descripcion
------------------------------------------------------------------
#Customer Service Manager
Orders -> Pedidos
Customer mails -> Correos de Clientes 
Customer Reviews -> Opiniones de Clientes
------------------------------------------------------------------
#User Manager -> Administrador de Usuarios
Your Profile -> Iniciaste sesión como:
Edit -> Modificar
Admins -> Administradores
Name -> Nombre
Email -> Correo
Joined -> Ultimo Inicio de Sesión
Register a new account -> Crear nueva cuenta
Staff -> Empleados
Name -> Nombre
Email -> Correo
Created -> Fecha de Creación
Add -> Crear
Edit -> Modificar
Remove -> Eliminar
EDIT FORM
Profile Image -> Imagen de Perfil
Name -> Nombre
Update -> Actualizar
REGISTER NEW ACCOUNT FORM
Name -> Nombre
Email -> Correo
Password -> Contraseña
Confirm Password -> Confirmar Contraseña
---------------------------------------------------------------------
#CHECKOUT FLOW PENDANT!
