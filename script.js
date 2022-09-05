const scoreTag = document.getElementById('content .score')
const bubble = document.querySelector('.bubble')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const formMode = document.querySelector('.formMode')
const scoresTable = document.querySelector('#scoresTable')


let userName = ''
const modes = {
    hard: {
        time: 1000,
        scoreCounter: 1
    },
    medium: {
        time: 2000,
        scoreCounter: 2
    },
    easy: {
        time: 3000,
        scoreCounter: 3
    }
}


let isContinue = false
let mode = modes.easy

let bubleInterval = null
let count = 0
let score = 0

const startBubbling = () => {
    startBtn.disabled = true
    stopBtn.disabled = false
    isContinue = true
    while (!userName) {
        userName = prompt('Please enter your name', "noName")
    }



    bubleInterval = setInterval(() => {
        let newBuble = document.createElement('span')
        newBuble.classList.add('bubble')
        newBuble.style.top = `${Math.floor(Math.random()*350)}px`
        newBuble.style.left = `${Math.floor(Math.random()*350)}px`
        bubble.appendChild(newBuble)
        count++
        newBuble.addEventListener('click', () => {
            newBuble.parentElement.removeChild(newBuble)
            score += mode.scoreCounter
            count--
            scoreTag.textContent = score
        })
        if (count == 100) {
            alert('Game finished')
            stopBubbling()
        }
    }, mode.time)
}

const stopBubbling = () => {
    startBtn.disabled = false
    stopBtn.disabled = true
    updateTable();
    bubble.innerHTML = ""
    isContinue = false

}

formMode.addEventListener("change", (e) => {
    mode = modes[e.target.value];
    clearInterval(bubleInterval);
    if (isContinue) startBubbling();
});


const updateTable = () => {
    let scores = JSON.parse(localStorage.getItem("scores")) || [];
    scoresTable.innerHTML = "";
    let tr = document.createElement("tr");
    let nameTh = document.createElement("th");
    let scoreTh = document.createElement("th");
    nameTh.textContent = "Name";
    scoreTh.textContent = "Score";
    tr.appendChild(nameTh);
    tr.appendChild(scoreTh);
    scoresTable.appendChild(tr);

    scores.sort((a, b) => b.score - a.score);


};

updateTable();

startBtn.addEventListener("click", startBubbling);
stopBtn.addEventListener("click", stopBubbling);