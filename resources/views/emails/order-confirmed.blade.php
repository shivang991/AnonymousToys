<section style="max-width: 72ch; margin: 0 auto; padding: 0.5rem;">
    <h1>
        Orden Confirmada
    </h1>
    <h4>Gracias por tu compra , Aqui esta una lista detallada de tu pedido.</h4>
    <table cellspacing="0" cellpadding="8 16" border="1">
        <tr style="background-color: black; color:white;">
            <th>Nombre</th>
            <th>Marca</th>
            <th>Cantidad</th>
            <th>Precio MXN</th>
        </tr>
        @foreach ($order->order_items as $item)
        <tr>
            <td>{{ $item->product->title }}</td>
            <td>{{ $item->product->brand }}</td>
            <td>{{ $item->quantity }}</td>
            <td>{{ $item->product->price }}</td>
        </tr>
        @endforeach
        <tr>
            <td colspan="3">Precio total:</td>
            <td>MXN {{ $order->total_price }}</td>
        </tr>
    </table>
    <p>Te mantendremos al tanto de tu entrega mediante correo.</p>
</section>