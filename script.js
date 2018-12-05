let p = document.querySelector('p');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let answer;




function fetchRiddle() {


    fetch("riddles.json").then(result => result.json()).then(data => show(data));

}

function setup() {
    noCanvas();
}

function draw() {

}


function show(riddles) {

    let myIndex = (max) => {
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let index = myIndex(riddles.length)
    p.textContent = riddles[index].riddle;
    answer = riddles[index].answer;
    console.log(riddles.length)
}

fetchRiddle();

function answer(player) {
    console.log(player + ' replied');

}

p1.addEventListener('click', answer("player1"));
p2.addEventListener('click', answer("player2"));
