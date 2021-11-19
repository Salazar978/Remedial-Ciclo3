function agregar_producto(){
    var producto = document.getElementById("form_producto");
    var valor = document.getElementById("form_valor");
    var cantidad = document.getElementById("form_cantidad");

    var datos = document.getElementById("tabla_productos");

    var subtotal = valor.value * cantidad.value;

    datos.innerHTML = datos.innerHTML + "<tr><td>"+producto.value+"</td><td>"+valor.value+"</td><td>"+cantidad.value+"</td><td>"+subtotal+"</td></tr>";
}