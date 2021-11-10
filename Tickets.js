function borrar()
{
    document.getElementById("borrarFormulario").reset();
}

function resumen()
{
    var cantidad = document.getElementById("inputCantidad").value;
    var categoria = document.getElementById("inputCategoria").value;

    var ticket = 200;
    var precioFinal = 0;

    switch(categoria){
        case "1": 
            precioFinal = ticket * cantidad * 0.2;
        break;
    
        case "2": 
            precioFinal = ticket * cantidad * 0.5;
        break;

        case "3": 
            precioFinal = ticket * cantidad * 0.85;
        break;
    }

document.getElementById("total").innerHTML = precioFinal;
}