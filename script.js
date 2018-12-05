let p = document.querySelector('p');




function fetchRiddle() {


    fetch("riddles.json").then(result => result.json()).then(data => show(data));

}



function show(riddles) {

    let myIndex = (max) => {
        let min = 0;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    p.textContent = riddles[myIndex(riddles.length)].riddle;
    console.log(riddles.length)
}

fetchRiddle();
