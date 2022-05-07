

let Comida1= prompt ("Ingresa una comida que te guste")

let Comida2 = prompt ("Ingresa una comida que no te guste")


function Almuerzo(Comida1,Comida2)
{
if (Comida1==="pizza" && Comida2==="brocoli")
{

return true
}
else 
{
return false;
}
}


let resultado= Almuerzo(Comida1,Comida2)

if(resultado)
{
alert ("Enviar comida")
}

else
{
alert  ("No se enviara la comida")
}




























