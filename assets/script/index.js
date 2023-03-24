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

// add global variables
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

setInterval (function () {
    if(startSound.currentTime > 99){
        startSound.pause();
        startSound.currentTime = 0
        addBtn.style.display = "inline-block";
    }
},1000);

function initialize() {
    word(words);

}

function word(words) {
    const randomWord = Math.floor(Math.random() * words.length);
    display.innerHTML = words[randomWord]
}

function countdown() {
    // make sure time is not at 0
    if(time > 0) {
        time--;
    }   else if(time === 0) {
        playing = false;
    }

}