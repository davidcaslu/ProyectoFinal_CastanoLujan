//COTIZADOR DE VIDEOS DE ANIMACIÓN


//VARIABLES


let tipoPersonajes;
let precioPersonajes;

let tipoEscenarios;
let cantidadEscenarios;
let precioEscenarios

let tipoAnimacion;
let cantidadMinutos;
let precioEstiloAnimacion;

let precioTotal = 0;
let listadoPrecioPersonajes = []

//PERSONAJES

//Función para construir personajes


let listaPersonajes = [];
//let cantidadPersonajes = parseInt(prompt("¿Cuántos personajes tiene tu video?"));

const crearPersonaje =() => {

    
    //Variables usadas en la función
    const formularioPersonajes = document.getElementById("formularioPersonajes");
    let nombre = document.getElementById("nombre").value;
    let formaAntropomorfica = parseInt(document.getElementById("formaAntropomorfica").value);
    let extremidades = parseInt(document.getElementById("extremidades").value);
    let peloLargo = parseInt(document.getElementById("peloLargo").value);
    let expresionesComplejas = parseInt(document.getElementById("expresionesComplejas").value);


    //Objeto constructor de personajes
    class Personaje {
        constructor(nombre, formaAntropomorfica, extremidades, peloLargo, expresionesComplejas) {
            this.nombre = nombre;
            this.formaAntropomorfica = formaAntropomorfica;
            this.extremidades = extremidades;
            this.peloLargo = peloLargo;
            this.expresionesComplejas = expresionesComplejas;
            this.precioBase = 50;
        }
    }
    
    const personaje = new Personaje  (nombre, formaAntropomorfica, extremidades, peloLargo, expresionesComplejas);

    //push del objeto creado al array de personajes
    listaPersonajes.push(personaje);
    console.log(personaje);

    let precioPersonaje = personaje.formaAntropomorfica + personaje.extremidades + personaje.peloLargo + personaje.expresionesComplejas + personaje.precioBase
    listadoPrecioPersonajes.push(precioPersonaje)
    console.log (`el precio de ${personaje.nombre} es ${precioPersonaje} USD`)
    console.log(listadoPrecioPersonajes)

    let espacioPersonajes = document.getElementById("espacioPersonajes");
    
    espacioPersonajes.innerHTML +=`
        <br><p class="pMedium">El personaje <strong>${nombre}</strong> tiene un valor de <strong> $${precioPersonaje}USD</strong> </p>
    `;

    const listaPersonajesJSON = JSON.stringify(listaPersonajes);
    localStorage.setItem("listaPersonajes", listaPersonajesJSON);

    formularioPersonajes.reset()
    return personaje; 
}


//ESCENARIOS 
const crearEscenarios =() => {

    tipoEscenarios = document.getElementById("tipoEscenarios").value;
    cantidadEscenarios = document.getElementById("cantidadEscenarios").value;

    precioEscenarios = tipoEscenarios * cantidadEscenarios

    if (cantidadEscenarios < 1) {
        let espacioEscenariosAlerta = document.getElementById("espacioEscenariosAlerta");
        espacioEscenariosAlerta.innerHTML =`
        <p class="pAlerta">Añade 1 o más escenarios</p>
        `;
        

    } else {

    console.log (`El valor total de los escenarios de tu video es $${precioEscenarios}USD`);

    let espacioEscenarios = document.getElementById("espacioEscenarios");
    espacioEscenarios.innerHTML =`
        <br>
        <p class="pMedium">Los escenarios tienen un valor de <strong> $${precioEscenarios}USD</strong> </p>
    `;

    let espacioEscenariosAlerta = document.getElementById("espacioEscenariosAlerta");
        espacioEscenariosAlerta.innerHTML = "";
    
    let botonEscenarios = document.getElementById("botonEscenarios");
    botonEscenarios.disabled = true;
    }
}


//ESTILO DE ANIMACIÓN

const calcularMinutos =() => {

    tipoAnimacion = document.getElementById("tipoAnimacion").value;
    cantidadMinutos = document.getElementById("cantidadMinutos").value;

    precioEstiloAnimacion = tipoAnimacion * cantidadMinutos

    if (cantidadMinutos < 1) {
        let espacioEstiloAlerta = document.getElementById("espacioEstiloAlerta");
        espacioEstiloAlerta.innerHTML =`
        <p class="pAlerta">Añade 1 o más minutos</p>
        `;

    } else {
        let espacioEstiloAlerta = document.getElementById("espacioEstiloAlerta");
        espacioEstiloAlerta.innerHTML = "";

        let espacioMinutos = document.getElementById("espacioMinutos");
        
        espacioMinutos.innerHTML =`
            <br>
            <p class="pMedium">El valor de los ${cantidadMinutos} minutos en este estilo es de <strong>$${precioEstiloAnimacion}USD<strong></p>
        `;

        let botonMinutos = document.getElementById("botonMinutos");
        botonMinutos.disabled = true;

        if (cantidadMinutos >= 3 && cantidadMinutos <=4) {
            precioEstiloAnimacion = precioEstiloAnimacion * 0.8
            console.log (`Tienes un descuento del 20% en la animación`)
            espacioMinutos.innerHTML +=`
            <br>
            <p class="pMedium">Por ser ${cantidadMinutos} minutos tienes un descuento del 20%. 
            <br>
            El valor en este estilo de animación es de <strong>$${precioEstiloAnimacion}USD<strong></p>
        `;
        } else if (cantidadMinutos >= 5) {
            precioEstiloAnimacion = precioEstiloAnimacion * 0.7
            console.log (`Tienes un descuento del 30% en la animación`)
            espacioMinutos.innerHTML +=`
            <br>
            <p class="pMedium">Por ser ${cantidadMinutos} minutos tienes un descuento del 30%.
            <br>
            El valor en este estilo de animación es de <strong>$${precioEstiloAnimacion}USD<strong></p>
        `;
        }
        else if (cantidadMinutos == 1){
            espacioMinutos.innerHTML =`
            <br>
            <p class="pMedium">El valor del minuto es de <strong>$${precioEstiloAnimacion}USD<strong></p>
        `;
        } else (precioEstiloAnimacion);

        console.log (`El valor en este estilo de animación es de $${precioEstiloAnimacion}USD`);
}
}

//COTIZAR

const cotizar = () =>{

    //console.log(listadoPrecioPersonajes);

    let precioTotalPersonajes = 0;

    for (let i = 0; i < listadoPrecioPersonajes.length; i++) {
        precioTotalPersonajes += listadoPrecioPersonajes[i]
        console.log(precioTotalPersonajes)
    }

    //console.log(`El precio total de los personajes es ${precioTotalPersonajes}`);

    precioTotal = precioEstiloAnimacion + precioEscenarios + precioTotalPersonajes

    let espacioCotizacionFinal = document.getElementById("espacioCotizacionFinal");
    if (precioTotal>0){espacioCotizacionFinal.innerHTML =`
    <p>El precio total de tu video es <strong> $${precioTotal} USD</strong> </p>
    `;
    } else {espacioCotizacionFinal.innerHTML =`
    <p class="pMedium">Primero llena todos los campos y luego presiona cotizar</p>
    `
    }

    console.log (`El valor total del video es $${precioTotal}USD`);
    localStorage.setItem("cotizacionAnterior", precioTotal)

    //DESHABILITAR O HABILITAR BOTONES

    let botonPersonajes = document.getElementById("botonPersonajes");
    let botonEscenarios = document.getElementById("botonEscenarios");
    let botonMinutos = document.getElementById("botonMinutos");
    let botonDivisas = document.getElementById("botonDivisas");

    if (precioTotal > 0) {
        botonPersonajes.disabled = true;
        botonEscenarios.disabled = true;
        botonMinutos.disabled = true;
        botonDivisas.disabled = false;

        // Swal.fire({
        //     title: 'Listo!',
        //     text: `Tu video animado tiene un valor de $${precioTotal} USD `,
        //     icon: 'success',
        //     confirmButtonText: 'Cerrar'
        // })

        Swal.fire({
            title: '<strong>Cotización</u></strong>',
            icon: 'success',
            html:
                `Tus personajes tienen un precio de $${precioTotalPersonajes}USD`+
                '<br>'+
                `Tus escenarios tienen un precio de $${precioEscenarios}USD`+
                `<br>`+
                `El estilo de animación elegido tiene un precio de $${precioEstiloAnimacion}USD`+
                `<br>` +
                '___________________________________'+
                `<br>`+
                `<b>El valor total del video es $${precioTotal}USD</b>`,
            showCloseButton: true,
        })

    } else {
        botonPersonajes.disabled = false;
        botonEscenarios.disabled = false;
        botonMinutos.disabled = false;
        botonDivisas.disabled = true;

        Swal.fire({
            title: 'Error!',
            text: 'Primero completa los campos',
            icon: 'error',
            confirmButtonText: 'Cerrar'
        })
    };

}

//RECUPERAR COTIZACIÓN

const recuperarCotizacion = ()=>{

    let cotizacionAnterior = parseInt(localStorage.getItem("cotizacionAnterior"))
    //let espacioCotizacionRecuperada = document.getElementById("espacioCotizacionRecuperada");

    if (cotizacionAnterior>0) {
    Swal.fire({
        title: 'Listo!',
        text: `Tu cotización anterior fue por un valor de $${cotizacionAnterior}USD`,
        icon: 'success',
        confirmButtonText: 'Cerrar'
    })

    } else (
    Swal.fire({
        title: 'Oops!',
        text: `Aún no tienes cotizaciones`,
        icon: 'error',
        confirmButtonText: 'Cerrar'
    })
    )
}


//OTRAS DIVISAS

const obtenerDatosFixer = ()=> {

fetch("https://v6.exchangerate-api.com/v6/a4e07167e5423463d2e9b8b1/latest/USD")
    .then(response => response.json())
    .then(result => {
            let conversionCop = result.conversion_rates.COP
            let conversionArs = result.conversion_rates.ARS
            let precioCop = Math.round(conversionCop * precioTotal)
            let precioArs = Math.round(conversionArs * precioTotal)
            let espacioOtrasDivisas = document.getElementById("espacioOtrasDivisas");
            espacioOtrasDivisas.innerHTML=`
            <p>El valor de tu cotización en pesos colombianos es $${precioCop}</p>
            <p>El valor de tu cotización en pesos argentinos es $${precioArs}</p>
            `
    })
    .catch(error => console.log('error', error));

    
}




