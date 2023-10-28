class Data {

    constructor(nombre, origen, destino, numPersonas, fecha) {
        this.nombre = nombre;
        this.origen = origen;
        this.destino = destino;
        this.numPersonas = numPersonas;
        this.fecha = fecha;
    }

}

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const numPersonas = document.getElementById("numPersonas");
const fecha = document.getElementById("fecha");
const filter = document.getElementById("filter");

let dataArr = [];

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let data = new Data(nombre.value, origen.value, destino.value,
        numPersonas.value, fecha.value);

    dataArr.push(data);

    formulario.reset();

});

filter.addEventListener("click", (event) => {
    event.preventDefault();

    const sectionContacto = document.getElementById("contacto");
    const containerDiv = document.createElement("div");
    containerDiv.style.cssText = 
        "background-color: transparent; display: flex; gap: 2rem; align-items: center; flex-wrap: wrap;";
    sectionContacto.appendChild(containerDiv);

    const regEx = /Canarias|Mallorca|Gal[íi]cia/i;

    for (let element of dataArr) {
        if (element.destino.match(regEx)) {
            console.log(element);

            const elementDiv = document.createElement("div");
            elementDiv.style.cssText = 
                "background-color: white; color: #034A58; font-size: 1.2rem; border-radius: 2rem; padding-inline: 1.5rem;";

            const pNombre = document.createElement("p");
            const pNombreText = document.createTextNode(`Nombre: ${element.nombre}`);
            pNombre.appendChild(pNombreText);
            elementDiv.appendChild(pNombre);

            const pOrigen = document.createElement("p");
            const pOrigenText = document.createTextNode(`Origen: ${element.origen}`);
            pOrigen.appendChild(pOrigenText);
            elementDiv.appendChild(pOrigen);

            const pDestino = document.createElement("p");
            const pDestinoText = document.createTextNode(`Destino: ${element.destino}`);
            pDestino.appendChild(pDestinoText);
            elementDiv.appendChild(pDestino);

            const pNumPersonas = document.createElement("p");
            const pNumPersonasText = document.createTextNode(`Número de personas: ${element.numPersonas}`);
            pNumPersonas.appendChild(pNumPersonasText);
            elementDiv.appendChild(pNumPersonas);

            const pFecha = document.createElement("p");
            const pFechaText = document.createTextNode(`Fecha: ${element.fecha}`);
            pFecha.appendChild(pFechaText);
            elementDiv.appendChild(pFecha);

            containerDiv.appendChild(elementDiv);

        }
    }

});
