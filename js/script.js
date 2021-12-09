/*
//primo giorno: fare la parte grafica
//secondo giorno: fare la parte javascript
const play = document.querySelector('.play');
const grid = document.getElementById('grid');
const select = document.getElementById ('level');
let numin = 1;
let numax = 100;

//cambio di livello

select.addEventListener('change', function(){
    console.log('inizio gioco');
    let level = select.value;
    console.log('scelta livello', level);

    changelvl(level, numax);
});

//in base al livello scelgo il numero di celle

function changelvl(lvl, numCells) {
    if (lvl == 1) {
        numCells = 100;
    }
    else if (lvl == 2) {
        numCells = 81;
    }
    else {
        numCells = 49;
    }
    console.log(numCells);
    return numCells;
}
RESTART
*/

const play = document.getElementById('play');
const containerGrid = document.getElementById('grid');
const numBomb = 16;
let arrayBomb = [];
const risultato = document.querySelector('.risultato');
play.addEventListener('click', function () {
    grid.innerHTML = '';

    const value = document.getElementById('level').value;

    let col = 0;
    let row = 0;

    if (value == '1') {
        row = 10;
        col = 10;
    }
    else if (value == '2') {
        row = 9;
        col = 9;
    }
    else if (value == '3') {
        row = 7;
        col = 7;
    }

    let numberSquare = row * col;

    while (arrayBomb.length < 16) {
        let numberRand = Math.floor(Math.random() * numberSquare) + 1;
        if (arrayBomb.includes(numberRand) == false) {
            //numberRand = Math.floor(Math.random() * (numberSquare - 1 + 1) + 1);
            arrayBomb.push(numberRand); 
        }
    }
    console.log(arrayBomb); //controolo array
    let points = parseInt(0); //inizializzo contatore
    for (let i = 0; i < numberSquare; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        square.append(i + 1);
        containerGrid.append(square);
        if (arrayBomb.includes(parseInt(square.innerText))) {
            square.classList.add('hidebomb');
        }
        
        square.addEventListener('click', function () {
            if (square.classList.contains('hidebomb')) {
                square.classList.add('bomb');
                let allBombs = document.querySelectorAll('.hidebomb');
                for (let z = 0; z < allBombs.length; z++) {
                    allBombs[z].classList.add('bomb');
                }
                risultato.append(`Hai perso!`);
                ris = points.toString();
                risultato.innerHTML += ' ' + ris + ' punti';
            }
            else {
                square.classList.add('clicked');
                points = points + 1;
            }
            console.log(points);
        })
    }
})
