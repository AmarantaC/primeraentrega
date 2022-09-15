// ------ Definicion de Clases y Arrays  ------ //


//--------- Usuarios ----------//

class Usuario {
    constructor(nombre, signo, edad,){
        this.nombre = nombre;
        this.signo = signo; 
        this.edad = edad;
    }
};

const Martha = new Usuario ( "Martha", "geminis", 26);
const Pablo = new Usuario ("Pablo", "escorpio", 35);
const Edgar = new Usuario ("Edgar", "libra", 20);
const Rocio = new Usuario ("Rocio", "leo", 29);

const usuarios = [Martha, Pablo, Edgar, Rocio];

class Signo{
    constructor(nombre, diaInicio, diasMes, mesInicio, diaFin, mesFin, mensaje ){
        this.nombre = nombre;
        this.diaInicio = diaInicio;
        this.diasMes = diasMes;
        this.mesInicio = mesInicio;    
        this.diaFin = diaFin;
        this.mesFin = mesFin;
        this.mensaje = mensaje;        
    }
};

const aries = new Signo ("aries", 21, 31, "marzo", 19, "abril", "Aunque se hayan suavizado los problemas, especialmente con los amigos, la relación no augura buen panorama.");
const tauro = new Signo ("tauro", 20, 30, "abril", 20, "mayo", "Evita que los celos te jueguen una mala pasada. Piensa dos veces antes de hacer comentarios irónicos que ofusquen a tu pareja.");
const geminis = new Signo ("geminis", 21, 31, "mayo", 20, "junio", "Es momento de cerrar círculos. Esa historia inconclusa merece un final, ya que tu pareja no soportará convivir con el pasado.");
const cancer = new Signo ("cancer", 21, 30, "junio", 22, "julio", "Situación oportuna para complacer con una cena romántica y una noche tranquila a la persona que te atrae.");
const leo = new Signo ("leo", 23, 31, "julio", 20, "agosto", "Los encuentros virtuales de recreo con amistades estimularán tu lado más romántico. Presta atención a señales indirectas.");
const virgo = new Signo ("virgo", 23, 31, "agosto", 22, "septiembre", "Tu bienestar lo encontrarás en las cosas más pequeñas, en la familia, una cena, una película. La soledad será tu aliada.");
const libra = new Signo ("libra", 23, 30, "septiembre", 22, "octubre", "Cierto clima de tensión y traiciones se respira en tu trabajo. Lo mejor será tomar distancia de algunos colegas y acercarte más a otros.");
const escorpio = new Signo ("escorpio", 23, 31, "octubre", 21, "noviembre", "Trata de descansar un poco más y así relajarte del estrés diario de tu trabajo. Renueva en lo posible tu interés por la vida sana.");
const sagitario = new Signo ("sagitario", 22, 30, "noviembre", 21, "diciembre", "No habrá vuelta atrás de las determinaciones que pretendes tomar en el día de hoy. Piensa dos veces antes de hacerlo.");
const capricornio = new Signo ("capricornio", 22, 31, "diciembre", 20, "enero", "Tus relaciones sociales experimentarán un gran giro, aunque se manifestarán de muy diferentes formas.");
const acuario = new Signo ("acuario", 21, 31, "enero", 19, "febrero", "Surgen nuevas gestiones y negocios importantes. No realices cambios radicales, simplemente mejora lo que tienes.");
const picis = new Signo ("picis", 20, 29, "febrero", 20, "marzo", "No habrá vuelta atrás de las determinaciones que pretendes tomar en el día de hoy. Piensa dos veces antes de hacerlo.");

const signos = [aries, tauro, geminis, cancer, leo, virgo, libra, escorpio, sagitario, capricornio, acuario, picis];

//--------- Funciones---------//

//-------- Función Menú --------//

function menu() {
    alert("Soy Madame Sazu");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de Usuario \n 2) Baja de Usuario \n 3) Conocer mi Signo \n 4) Conocer mi suerte \n 5) Salir"));
    return opcion;
}

//-------- Función Alta Usuario  --------//

function altaUsuario() {  

    let nuevoNombre = prompt("Ingrese el nombre del usuario: ");    
    while( nombreExistente = usuarios.some(Usuario => Usuario.nombre === nuevoNombre)){
        nuevoNombre = prompt("Ingrese nuevo nombre de Usuario: ");        
    }

    let nuevoSigno = prompt("Ingrese el signo del usuario: ").toLowerCase();   
    while(signoValido = ! (signos.some(Signo => Signo.nombre === nuevoSigno))){
        nuevoSigno = prompt("Ingrese un signo valido: ").toLowerCase();
    }

    let usuarioNuevo = new Usuario (nuevoNombre, nuevoSigno);
    usuarios.push(usuarioNuevo);
    console.log(usuarios);
};

//-------- Función Baja Usuario  --------//

function bajaUsuario() {

    let nombre = prompt("Ingrese el nombre del usuario: ");
    let usuario = usuarios.find(Usuario => Usuario.nombre === nombre);
    let indice = usuarios.indexOf(usuario);

    usuarios.splice(indice, 1);
    console.log(usuarios);
};

//-------- Función Conocer mi Signo --------//

function conocerSigno() {

    let dia = parseInt(prompt("Ingrese su dia de nacimiento: "));

    let mes = prompt("Ingrese su mes de nacimiento: ");

    for ( let Signo of signos) {
        if (((dia >= Signo.diaInicio )&&( dia <= Signo.diasMes) && (mes == Signo.mesInicio))||
        ((dia >= 1 )&&( dia <= Signo.diaFin) && (mes == Signo.mesFin))){
            alert(`Tu signo es ${Signo.nombre}`)        
        }       
    }
};

//-------- Función Conocer mi Suerte --------//


function conocerSuerte() {
    let numSuerte = (Math.round(Math.random() * 15 + 1));

    let signoSuerte = prompt("Cual es tu signo: ").toLowerCase();
    while(signoValido = ! (signos.some(Signo => Signo.nombre === signoSuerte))){
        signoSuerte = prompt("Ingrese un signo valido: ").toLowerCase();
    }

    let signoValidado = signos.find(Signo => Signo.nombre === signoSuerte)

    alert(`Hola ${signoValidado.nombre}\n${signoValidado.mensaje}\nTu numero de la suerte es ${numSuerte}`);
   
};

function salir() {
    alert("Regresa pronto amiguito");
}

//---------- Ejecucion ---------//

let opcion = menu();
switch (opcion) {
    case 1:
        altaUsuario();
        break;
    case 2:
        bajaUsuario();
        break;
    case 3:
        conocerSigno(signos);
        break;
    case 4:
        conocerSuerte();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Tipico de Picis");
        break;
}

