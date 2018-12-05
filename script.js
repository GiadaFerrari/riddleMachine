let p = document.querySelector('p');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let answers;
let speechRec = new p5.SpeechRec('en-US', gotSpeech);





function fetchRiddle() {


    fetch("riddles.json").then(result => result.json()).then(data => show(data));

}

function setup() {
    noCanvas();
    let speechRec = new p5.SpeechRec('en-US', gotSpeech);
}

function gotSpeech() {
    console.log(speechRec)
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
    answers = riddles[index].answer;
    console.log(riddles.length)
}

fetchRiddle();

function answer(player) {
    console.log(player + ' replied');
    speechRec.start();


}

p1.addEventListener('click', () => answer("player1"));
p2.addEventListener('click', () => answer("player2"));
