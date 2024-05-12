let botonJugada = document.querySelectorAll(".boton-jugada");
let posibilidadesJuego = ['piedra', 'papel', 'tijera'];
let imagenInicial = document.getElementById('juego');
let numeroAleatorio;
let jugadaUsuario;
let jugadaAleatoria;
let puntosMaquina = 0;
let puntosUsuario = 0;

//Añadimos funcionalidad a los botones cuando se realiza un evento 'click' sobre cualquiera de ellos
for (let i = 0; i < botonJugada.length; i++) {
    botonJugada[i].addEventListener("click", function() {
        
        //Obtenemos el botón que ha clickado el usuario a través del atributo 'data-jugada'
        jugadaUsuario = botonJugada[i].getAttribute('data-jugada');

        //Desaparece imagen inicial
        imagenInicial.style.display = 'none';

        //Aparece el contenedor principal del juego
        document.getElementById('content').style.display = 'flex';

        //Llamada a funciones
        contadorPuntos();
        mostrarImagen();

        console.log(`máquina: ${jugadaAleatoria}`);
        console.log(`usuario: ${jugadaUsuario}`);
    });
}

//Función para generar un número aleatorio para que juegue la máquina
function generarJugadaMaquina() {
    numeroAleatorio = Math.floor((Math.random() * (2 - 0 + 1)) + 0);
    console.log(numeroAleatorio);
    jugadaAleatoria = posibilidadesJuego[numeroAleatorio];
    return jugadaAleatoria;
}

//Función para contar puntos de la máquina y del usuario
function contadorPuntos() {

    //Llamamos a generarJugadaMaquina() para obtener una elección aleatoria de la máquina y compararla con nuestra elección
    generarJugadaMaquina();

    //Comprobamos ambas elecciones
    if(jugadaUsuario === jugadaAleatoria){
        console.log("Hemos empatado")
    } else if (jugadaUsuario === "piedra" && jugadaAleatoria ==="papel") {
        puntosMaquina++;
        document.getElementById('contador-ordenador').innerHTML = 'Puntos de la máquina: ' + puntosMaquina;
        ganaMaquina();
        console.log(`máquina`);
    } else if (jugadaUsuario === "tijera" && jugadaAleatoria ==="piedra") {
        puntosMaquina++;
        document.getElementById('contador-ordenador').innerHTML = 'Puntos de la máquina: ' + puntosMaquina;
        ganaMaquina();
        console.log(`máquina`);
    }  else if (jugadaUsuario === "papel" && jugadaAleatoria ==="tijera") {
        puntosMaquina++;
        document.getElementById('contador-ordenador').innerHTML = 'Puntos de la máquina: ' + puntosMaquina;
        ganaMaquina();
        console.log(`máquina`);
    } else if (jugadaUsuario === "piedra" && jugadaAleatoria ==="tijera") {
        puntosUsuario++;
        document.getElementById('contador-usuario').innerHTML = 'Tus puntos: ' + puntosUsuario;
        ganaUsuario();
        console.log(`usuario`);
    } else if (jugadaUsuario === "tijera" && jugadaAleatoria ==="papel") {
        puntosUsuario++;
        document.getElementById('contador-usuario').innerHTML = 'Tus puntos: ' + puntosUsuario;
        ganaUsuario();
        console.log(`usuario`);
    } else if (jugadaUsuario === "papel" && jugadaAleatoria ==="piedra") {
        puntosUsuario++;
        document.getElementById('contador-usuario').innerHTML = 'Tus puntos: ' + puntosUsuario;
        ganaUsuario();
        console.log(`usuario`);
    }
}

//Función para mostrar una imagen según la opción de la máquina y del usuario
function mostrarImagen() {
    if (jugadaAleatoria === 'papel') {
        document.getElementById('maquina-papel').style.display = 'block';
        document.getElementById('maquina-piedra').style.display = 'none';
        document.getElementById('maquina-tijera').style.display = 'none';
    } else if (jugadaAleatoria === 'piedra') {
        document.getElementById('maquina-papel').style.display = 'none';
        document.getElementById('maquina-piedra').style.display = 'block';
        document.getElementById('maquina-tijera').style.display = 'none';
    } else if (jugadaAleatoria === 'tijera') {
        document.getElementById('maquina-papel').style.display = 'none';
        document.getElementById('maquina-piedra').style.display = 'none';
        document.getElementById('maquina-tijera').style.display = 'block';
    }

    if (jugadaUsuario === 'papel') {
        document.getElementById('usuario-papel').style.display = 'block';
        document.getElementById('usuario-piedra').style.display = 'none';
        document.getElementById('usuario-tijera').style.display = 'none';
    } else if (jugadaUsuario === 'piedra') {
        document.getElementById('usuario-papel').style.display = 'none';
        document.getElementById('usuario-piedra').style.display = 'block';
        document.getElementById('usuario-tijera').style.display = 'none';
    } else if (jugadaUsuario === 'tijera') {
        document.getElementById('usuario-papel').style.display = 'none';
        document.getElementById('usuario-piedra').style.display = 'none';
        document.getElementById('usuario-tijera').style.display = 'block';
    }
}

//Función para aplicar estilos
function ganaUsuario() {
    let usuario = document.getElementById('contador-usuario');
    usuario.classList.remove('contador-usuario');
    setTimeout(() => {
        usuario.classList.add('contador-usuario');  
    }, 500);
}

//Función para aplicar estilos
function ganaMaquina() {
    let maquina = document.getElementById('contador-ordenador');
    maquina.classList.remove('contador-ordenador');
    setTimeout(() => {
        maquina.classList.add('contador-ordenador');  
    }, 500);
}
