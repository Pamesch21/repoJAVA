

class ListadoPersonas {
    constructor(descripcion,precio,cantidad){
        this.nombreProducto = descripcion;
        this.precio= precio;
        this.cantidad = cantidad;
    }
    
}


let restaurantes = Number(prompt("Ingrese cantidad de adultos para la reserva"));
console.log(restaurantes)

const arrayRestaurantes = [];
for (let i = 0; i< restaurantes; i++){


    arrayRestaurantes[i]= new ListadoPersonas(prompt
    ("ingrese cantidad de niños para la reserva")
    ,prompt ("ingrese dia en el que desea la reserva"),
     prompt("ingrese hora en la que desea la reserva"))
  

}

console.log(arrayRestaurantes);




let Viaje1= prompt ("Ingresa el mes en el cual planeas tu viaje")

let Viaje2= prompt ("Conocer destinos")


function Viajes(Viaje1,Viaje2)
{
if (Viaje1==="septiembre" && Viaje2==="Islas")
{

return true
}
else 
{
return false;
}
}


let resultado= Viajes(Viaje1,Viaje2)

if(resultado)
{
alert ("Comenzar simulacion de viaje")
}

else
{
alert  ("No se encontraron resultados")
}
















