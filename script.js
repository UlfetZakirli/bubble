const board = document.getElementById('board')
const starts = document.getElementById('start')
const stops = document.getElementById('stop')
const easy = document.getElementById('easy')
const medium = document.getElementById('medium')
const hard = document.getElementById('hard')



starts.addEventListener('click', () => {
    // let interval =setInterval(addBubble,1000)
   
    if (document.querySelector('.easy').checked) {
        setInterval(addBubble,3000)
    }
    if (document.querySelector('.medium').checked) {
        setInterval(addBubble,2000)
    }
    if (document.querySelector('.hard').checked) {
        setInterval(addBubble,1000)
    }
    stops.addEventListener('click', () => {
        clearInterval(interval)
    })
})

function addBubble() {
    let bubble = document.createElement('div')
    bubble.classList.add('bubble')
    board.appendChild(bubble)


hard.addEventListener('click', () => {
     document.querySelector('.hard').setAttribute('checked', '')
     document.querySelector('.easy').removeAttribute('checked')
     document.querySelector('.medium').removeAttribute('checked')
})
easy.addEventListener('click', () => {
    document.querySelector('.easy').setAttribute('checked', '')
    document.querySelector('.hard').removeAttribute('checked')
    document.querySelector('.medium').removeAttribute('checked')
})
medium.addEventListener('click', () => {
    document.querySelector('.medium').setAttribute('checked', '')
    document.querySelector('.hard').removeAttribute('checked')
    document.querySelector('.medium').removeAttribute('checked')
})

}