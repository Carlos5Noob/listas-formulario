lista = {
    "Cádiz": ["Jerez", "Zahara", "Tarifa", "Olvera", "Vejer"], 
    "Huelva": ["Berrocal", "El Almendro", "Campofrío", "Guzmán", "Beas"],
    "Málaga": ["Fuengirola", "Estepona", "Benalmádena", "Torremolinos", "Marbella"], 
    "Almería": ["Alcolea", "Abrucena", "Alhabia", "Senés", "Vícar"], 
    "Jaen": ["Alcaudete", "Andújar", "Arjona", "Arquillos", "Baeza"], 
    "Granada": ["Diriomo", "Dirlá", "Nandaime", "Bérchules", "Capileira"], 
    "Sevilla": ["Carmona", "Campana", "Pruna", "Gerena", "Camas"], 
    "Córdoba": ["Aguilar", "Almedinilla", "Alcaracejos", "Belmez", "Adamuz"]
} // diccionario donde se guardan los municipios de cada provincia de Andalucía

// todo esto es para definir los elementos del formulario con sus respectivos id y type, entre otros
let form = document.createElement('form');
let provinciaSelect = document.createElement('select');
provinciaSelect.id = 'provincia';
provinciaSelect.required = true;

let municipioSelect = document.createElement('select');
municipioSelect.id = 'municipio';
municipioSelect.required = true;
municipioSelect.disabled = true;

let boton = document.createElement('button');
boton.type = 'submit';
boton.textContent = 'Enviar';

let defaultOptionProvincia = document.createElement('option');
defaultOptionProvincia.value = '';
defaultOptionProvincia.textContent = 'Seleccionar provincia';
provinciaSelect.appendChild(defaultOptionProvincia);

for (let provincia in lista) {
    let option = document.createElement('option');
    option.value = provincia;
    option.textContent = provincia;
    provinciaSelect.appendChild(option);
}

// esta es la lógica para cambiar la selección de las listas
provinciaSelect.addEventListener('change', function() {
    municipioSelect.innerHTML = '';
    let selectedProvincia = provinciaSelect.value;
    if (selectedProvincia) {
        municipioSelect.disabled = false;
        let defaultOptionMunicipio = document.createElement('option');
        defaultOptionMunicipio.value = '';
        defaultOptionMunicipio.textContent = 'Seleccionar municipio';
        municipioSelect.appendChild(defaultOptionMunicipio);
        for (let i = 0; i < lista[selectedProvincia].length; i++) {
            let option = document.createElement('option');
            option.value = lista[selectedProvincia][i];
            option.textContent = lista[selectedProvincia][i];
            municipioSelect.appendChild(option);
        }
    } else {
        municipioSelect.disabled = true;
    }
});

// al formulario le añado el evento de tipo submit para que valide si los campos están seleccionados o no
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!provinciaSelect.value) {
        alert('Debe seleccionar una provincia.');
        provinciaSelect.focus();
        return;
    }
    if (!municipioSelect.value) {
        alert('Debe seleccionar un municipio.');
        municipioSelect.focus();
        return;
    }
    alert('Formulario enviado con éxito: \nProvincia: ' + provinciaSelect.value + '\nMunicipio: ' + municipioSelect.value);
});

// aquí uno los elementos del formulario
form.appendChild(provinciaSelect);
form.appendChild(municipioSelect);
form.appendChild(boton);
document.body.appendChild(form);

