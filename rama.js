


const baseDeDatos = [
    {
        id: 1,
        nombre: 'Bolso de mano',
        precio: 500,
    
    },
    {
        id: 2,
        nombre: 'Valija 10kg',
        precio: 1500,
    
    },
    {
        id: 3,
        nombre: 'Valija 20kg',
        precio: 2500,
     
    },
    

    {
        id: 4,
        nombre: 'Seleccionar asientos',
        precio: 300,
      
    },

    {
        id: 5,
        nombre: 'Embarque prioritario',
        precio: 600,
      
    },
    {
        id: 6,
        nombre: 'Equipaje pesado',
        precio: 4100,
      
    }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones

/**

 */
function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
       
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${info.precio}${divisa}`;
        // Boton 
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = '+';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos

        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}


function anyadirProductoAlCarrito(evento) {
    
    carrito.push(evento.target.getAttribute('marcador'))

    renderizarCarrito();

}


function renderizarCarrito() {

    DOMcarrito.textContent = '';
 
    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {
    
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
   
            return itemBaseDatos.id === parseInt(item);
        });
       
       const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          
            return itemId === item ? total += 1 : total;
        }, 0);
    
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
       
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
       
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
    });
    
    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    
    const id = evento.target.dataset.item;

    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
 
    renderizarCarrito();
}


function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {

    carrito = [];
 
    renderizarCarrito();
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderizarProductos();
renderizarCarrito();

/**FETCH */
document.getElementById('txtBtn').addEventListener('click',cargarTXT);

function cargarTXT() {
    fetch('terminos.text')
        .then(function(res){
            return res.text();
        }) 
.then(function(empleados){
console.log(empleados);
document.getElementById('resultado').innerHTML = empleados
})
}




/*LIBRERIAS*/ 
init();

function init()
{
    saludarconSweetAlert();
}


function saludarconSweetAlert()
{
    const btn = document.getElementById("btnSweet")
    btn.addEventListener("click",()=>{

Swal.fire({
    title: 'Reserva efectuada con exito',
 
    icon: 'success',

    })

})
 }

 boton();

function boton()
{
    saludarconboton();
}


function  saludarconboton()
{
    const btn = document.getElementById("mi_descuento")
    btn.addEventListener("click",()=>{

Swal.fire({
    title: 'PROMOCION APLICADA',
 
    icon: 'success',

    })

})
 }



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


        let nombre=prompt ("ingresa tu nombre");
localStorage.setItem("NOMBREDEUSUARIO" , nombre);
const h1 =document.createElement("h1");
h1.innerHTML=`,${nombre}`;
document.body.appendChild(h1);



/*json */
var islas ='{"adulto":"2", "niños":"5", "reservas":"1"}';
var objetoJS = JSON.parse(islas);
console.log(islas);



