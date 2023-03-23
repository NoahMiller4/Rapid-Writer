/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Rapid Writer

    Noah Miller

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict'

const array = ['dinosaur', 'love', 'pineapple', 'calendar', 'robot', 'building', 
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
const output = document.querySelector('.output');
const time = document.querySelector('.time');

const startSound = new Audio('./assets/audio/easyCheesy.mp3');
startSound.type = 'audio/mp3';

const playSound = addBtn.addEventListener('click', () => {
    startSound.play();
});

const hideButton = addBtn.addEventListener('click', () => {
    addBtn.style.display = "none"
})

setInterval (function () {
    if(startSound.currentTime > 99){
        startSound.pause();
        startSound.currentTime = 0
        addBtn.style.display = "inline-block";
    }
},1000);

