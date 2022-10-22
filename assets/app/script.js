const agregar = document.getElementById('registrar');
const limpiar = document.getElementById('limpiar');
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	numero: /^\d{4}-\d{4}$/ // 8 numeros.
}

//Validar datos y gregar clases (color rojo / verde)
const validarDatos = (e) => {
    switch(e.target.id){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('badText')
                document.getElementById('nombre').classList.add('goodText')
            } else {
                document.getElementById('nombre').classList.add('badText')
            }
        break;
        case "apellido":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('apellido').classList.remove('badText')
                document.getElementById('apellido').classList.add('goodText')
            } else {
                document.getElementById('apellido').classList.add('badText')
            }
        break;
        case "matricula":
            if(expresiones.numero.test(e.target.value)){
                document.getElementById('matricula').classList.remove('badText')
                document.getElementById('matricula').classList.add('goodText')
            } else {
                document.getElementById('matricula').classList.add('badText')
            }
        break;
        case "nota":
            num = e.target.value;
            
            if(e.target.value > 0 || e.target.value < 100){
                document.getElementById('nota').classList.remove('badText')
                document.getElementById('nota').classList.add('goodText')
            } else {
                document.getElementById('nota').classList.add('badText')
            }
        break;
        case "materia":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('materia').classList.remove('badText')
                document.getElementById('materia').classList.add('goodText')
            } else {
                document.getElementById('materia').classList.add('badText')
            }
        break;
    }
}


//Leer inputs en formulario en tiempo real
inputs.forEach((input) => {
    input.addEventListener('keyup',validarDatos);
    input.addEventListener('blur',validarDatos);

});


//Se evita el envio automatico
form.addEventListener('submit', (e) => {
    e.preventDefault();
});


// //Boton Limpiar 
function LimpiarFormulario(){
    form.reset();
    borrarClass();   
}

//Borrar las clases (badText / GoodText)
function borrarClass(){
    inputs.forEach((input) => {
        input.classList.remove('badText')
        input.classList.remove('goodText')
        
    });
}

// Clase Estudiante

class Estudiante {
constructor(nombre, apellido, materia, matricula, nota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.materia = materia;
    this.matricula = matricula;
    this.nota = nota;
}
}


//Registrar Boton
function registrarEstudiante() {
    const Estudiante1 = new Estudiante (nombre.value, apellido.value, materia.value, matricula.value, nota.value) 
    alert('Estudiante Agregado correctamente!...')
    LimpiarFormulario();
    console.log(Estudiante1)
}

// Validar Datos a insertar
const validacionDeDatos = () => {
    notas = Number(nota.value)     
    if(!expresiones.nombre.test(nombre.value)){
        alert('Valor de nombre incorrecto!')
    } else if (!expresiones.nombre.test(apellido.value)) {
        alert('Valor de apellido incorrecto!')
    } else if (!expresiones.nombre.test(materia.value)) {
        alert('Valor de materia incorrecto!')
    } else if (!expresiones.numero.test(matricula.value)){
        alert('Valor de matricula incorrecto!')
    } else if(notas < 0 || notas > 100){
        alert('Valor de nota incorrecta!')
       }  else {
        registrarEstudiante();
       }
}

//Event Listener
agregar.addEventListener('click', validacionDeDatos);
limpiar.addEventListener('click', LimpiarFormulario);
