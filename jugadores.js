let jugadores = [
    {
        nombre: 'Emiliano Martinez',
        edad: 29,
        club: 'Aston villa',
        camiseta: 1,
        imagen: 'fotos/dibu.jpg'
    },
    {
        nombre: 'Gonzalo Montiel',
        edad: 25,
        club: 'Sevilla',
        camiseta: 4,
        imagen: 'fotos/Montiel.jpg'
    },
    {
        nombre: 'Cristian Romero',
        edad: 24,
        club: 'Tottenham',
        camiseta: 2,
        imagen: 'fotos/Cuti.jpg'
    },
    {
        nombre: 'Nicolas Otamendi',
        edad: 34,
        club: 'Benfica',
        camiseta: 19,
        imagen: 'fotos/Otamendi.jpg'
    },
    {
        nombre: 'Marcos Acuña',
        edad: 29,
        club: 'Sevilla',
        camiseta: 8,
        imagen: 'fotos/Acuña.jpg'
    },
    {
        nombre: 'Leandro Paredes',
        edad: 26,
        club: 'PSG',
        camiseta: 5,
        imagen: 'fotos/Paredes.jpg'
    },
    {
        nombre: 'Angel Di Maria',
        edad: 34,
        club: 'PSG',
        camiseta: 11,
        imagen: 'fotos/Angelito.jpg'
    },
    {
        nombre: 'Giovani Lo Celso',
        edad: 26,
        club: 'Tottenham',
        camiseta: 20,
        imagen: 'fotos/Lo celso.jpg'
    },
    {
        nombre: 'Rodrigo De Paul',
        edad: 28,
        club: 'Atletico Madrid',
        camiseta: 7,
        imagen: 'fotos/De paul.jpg'
    },
    {
        nombre: 'Lionel Andres Messi',
        edad: 34,
        club: 'PSG',
        camiseta: 10,
        imagen: 'fotos/Messii.jpg'
    },
    {
        nombre: 'Lautaro Martinez',
        edad: 23,
        club: 'Inter de Milan',
        camiseta: 9,
        imagen: 'fotos/Toro.jpg'
    },
    {
        nombre: 'Lionel Scaloni',
        edad: 29,
        club: 'Seleccion Argentina',
        camiseta: 'Director tecnico',
        imagen: 'fotos/Dt.jpg'
    },
];

let miLista = document.getElementById("miListaDeArgentina");

for (let jugador of jugadores) {

    miLista.innerHTML += `
        <div class="div-padre">
        <h3> ${jugador.nombre} </h3>
        <p>${jugador.edad}  </p>
        <p>${jugador.club}  </p>
        <p>${jugador.camiseta} </p>
        <div class="imagen"><img src="${jugador.imagen}"></div>
        
        </div>
        
        `




}