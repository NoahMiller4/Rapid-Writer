/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Rapid Writer

    Noah Miller

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict'

const words = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 
'weather', 'bottle', 'history', 'dream', 'character', 'money', 'absolute',
'discipline', 'machine', 'accurate', 'connection', 'rainbow', 'bicycle',
'eclipse', 'calculator', 'trouble', 'watermelon', 'developer', 'philosophy',
'database', 'periodic', 'capitalism', 'abominable', 'component', 'future',
'pasta', 'microwave', 'jungle', 'wallet', 'canada', 'coffee', 'beauty', 'agency',
'chocolate', 'eleven', 'technology', 'alphabet', 'knowledge', 'magician',
'professor', 'triangle', 'earthquake', 'baseball', 'beyond', 'evolution',
'banana', 'perfumer', 'computer', 'management', 'discovery', 'ambition', 'music',
'eagle', 'crown', 'chess', 'laptop', 'bedroom', 'delivery', 'enemy', 'button',
'superman', 'library', 'unboxing', 'bookstore', 'language', 'homework',
'fantastic', 'economy', 'interview', 'awesome', 'challenge', 'science', 'mystery',
'famous', 'league', 'memory', 'leather', 'planet', 'software', 'update', 'yellow',
'keyboard', 'window', 'population'];

const addBtn = document.querySelector('.btn');
const input = document.querySelector('.input');
const time = document.querySelector('.time');
const display = document.querySelector('.display');
const scoreDisplay = document.querySelector('.score');
const message = document.querySelector('.message')

// add global variables, initialize playing
let seconds = 99;
let score = 0;
let playing;

const startSound = new Audio('./assets/audio/easyCheesy.mp3');
startSound.type = 'audio/mp3';

const playSound = addBtn.addEventListener('click', () => {
    startSound.play();
});

const hideButton = addBtn.addEventListener('click', () => {
    addBtn.style.display = "none"
})

const init = addBtn.addEventListener('click', initialize)

// not onClick, keep seperate from initialize()
setInterval (function () {
    if(startSound.currentTime > 99){
        startSound.pause();
        startSound.currentTime = 0
        addBtn.style.display = "inline-block";
        message.innerHTML = 'score';
    }
},1000);

function initialize() {
    word(words);
    input.addEventListener('input', start)
    setInterval(countdown, 1000);
    setInterval(checkGame, 50)

}

function start() {
    if(sameWord()) {
        playing = true;
        word(words);
        input.value = '';
        score++;
    }
    if (score === 0) {
        scoreDisplay.innerHTML = score;
    } else {
        scoreDisplay.innerHTML = score;
    }
    
}

function sameWord() {
    if(input.value === display.innerHTML) {
        message.innerHTML = 'Correct!'
        return true
    } else {
        message.innerHTML = '';
        return false
    }
}

// radomize words from array and return
function word(words) {
    const randomWord = Math.floor(Math.random() * words.length);
    display.innerHTML = words[randomWord]
}

function countdown() {
    // make sure time is not at 0
    if(seconds > 0) {
        seconds--;
    }   else if(seconds === 0) {
        playing = false;
    }
    time.innerHTML = seconds;
}

function checkGame() {
    if (!playing && seconds === 0) {
        message.innerHTML = '';
        score = 0
    }
}