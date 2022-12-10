// selecciono los elementos del DOM
const apellido = document.getElementById('apellido');
const nombre = document.getElementById('nombre');
const cuit = document.getElementById('cuit');
const condIva = document.getElementById('cond-iva');
const btnAgregar = document.querySelector('.btn-primary');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment();

const listaContactos = document.getElementById('lista-contactos');

// funcion click

document.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target.matches('.btn-primary'));
    if(e.target.matches('.btn-primary')){
        agregarInfoContacto(e)
    }

})

// construccion del objeto contacto
const agendaContactos = [];

// agregar info al objeto
const agregarInfoContacto = (e) => {
    
    const contacto = {
        apellido: apellido.value,
        nombre: nombre.value,
        cuit: cuit.value,
        condIva: condIva.value,

    }
    agendaContactos.push(contacto);
    imprimirContacto();


};


// mostrar los contactos creados en el DOM

const imprimirContacto = () => {

    agendaContactos.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.apellido').textContent = contacto.apellido;
        clone.querySelector('.nombre').textContent = contacto.nombre;
        clone.querySelector('.cuit').textContent = contacto.cuit;
        clone.querySelector('.cond-iva').textContent = contacto.condIva;
        
        fragment.appendChild(clone);
    });

    listaContactos.appendChild(fragment);

};
