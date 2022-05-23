
function reservas (){

pasaje= prompt("Quieres realizar tu reserva?");
if (pasaje =="si"){
    alert("Continuemos")
}
else {
    alert ("Ingrese mas tarde")
}

}

reservas()

const sumar = (num1,num2) => {
    return parseInt(num1) + parseInt (num2);
}
const restar = (num1,num2) => {;
    return parseInt(num1) - parseInt (num2);
}

    alert("Pasaje adulto $1000, Pasaje menores de 12 años $500")
 
    let operacion = prompt ("1:un Adulto,2:Un menor, 3:salir");

if (operacion == 1){
    let numero1 = prompt("Si desea un pasaje escriba 1000");

    let numero2 = prompt("Si desea dos pasajes escriba $2000, de lo contrario poner 0");
    resultado= sumar (numero1,numero2);
    alert (`el total es ${resultado}`);
}

else if (operacion == 2){
    let numero1 = prompt("Si desea un pasaje para menor de 12 años escriba 500");

    let numero2 = prompt("Si desea dos pasajes para menores de 12 años escriba $1000, de lo contrario poner 0");
    resultado= sumar (numero1,numero2);
    alert (`el total es ${resultado}`);
}

else {
    alert("no se ha encontrado datos")
}
  




var almuerzos= [
    {principal:"carne", postre: "helado"},
    {principal:"pizza", postre:"fruta" },
    {principal:"tortilla", postre:"chocolate" },
    ]
    
    
    var platosPrincipales= almuerzos.map(function(almuerzo) {
        return almuerzo.principal
    })
    console.log(platosPrincipales);
    
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
    
