let p = document.querySelector('p');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let answers;
let speechRec = new p5.SpeechRec('en-US', gotSpeech);
let aside1 = document.querySelector('.p1pt');
let aside2 = document.querySelector('.p2pt');
let p1pt = 0;
let p2pt = 0;
let tryAgain = document.querySelector('.try');
let good = document.querySelector('.good');
let player;




aside1.textContent = p1pt;
aside2.textContent = p2pt;




function fetchRiddle() {


    fetch("riddles.json").then(result => result.json()).then(data => show(data));

}

function setup() {
    let speechRec = new p5.SpeechRec('en-US', gotSpeech);
}

function gotSpeech() {

    console.log(speechRec.resultString);
    if (speechRec.resultString == answers) {
        console.log(good)
        //good.addClass.toggle('hide');
        if (player == 'player1') {
            p1pt++;

        };
        if (player == 'player2') {
            p2pt++
        }
        fetchRiddle();
    }
    //     else {
    //        tryAgain.addClass.toggle('hide');
    //    }
    //    setTimeout(() => {
    //        if (tryAgain.hasClass('hide') != true) {
    //            tryAgain.addClass.toggle('hide')
    //        } else if (good.hasClass('hide') != true) {
    //            good.addClass.toggle('hide')
    //        }
    //
    //    }, 2000);
}



function show(riddles) {

    let myIndex = (max) => {
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let index = myIndex(riddles.length)
    p.textContent = riddles[index].riddle;
    answers = riddles[index].answer;
    console.log(answers)
}

fetchRiddle();

function answer(playerA) {
    console.log('im listening')
    console.log(playerA + ' replied');
    speechRec.start();
    player == playerA;


}

p1.addEventListener('click', () => answer("player1"));
p2.addEventListener('click', () => answer("player2"));
