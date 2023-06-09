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
const message = document.querySelector('.message');
const hideDisplay = document.querySelector('.hide');
const descrip = document.querySelector('.descrip');
const text = document.querySelector('.text');
const box = document.querySelector('.box');
const highscores = document.querySelector('.highScores')
const clear = document.querySelector('.clearScore')

// add global variables, initialize playing
let seconds =  30;
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

const init = addBtn.addEventListener('click', initialize);


// not onClick, keep seperate from initialize()
setInterval (function () {
    if(startSound.currentTime > 30){
        startSound.pause();
        startSound.currentTime = 0
        addBtn.style.display = "inline-block";
        text.style.display = 'block';
        descrip.style.display = 'block';
        hideDisplay.style.display = 'none';
        input.placeholder = "";
        box.style.width = '100%';
        box.style.backgroundColor = 'rgb(0 0 0 / 0)';
        box.style.border = 'solid 1px rgb(0 0 0 / 0)';
        box.style.borderRadius = '0';
        saveScore(score);
        displayHighScores()
        score = 0;
        display.innerHTML = "Try Again?"
        highscores.style.display = "block";
    }
},1000);

const timing = setInterval(countdown, 1000);
const game = setInterval(checkGame, 50);

function initialize() {
    text.style.display = 'none';
    descrip.style.display = 'none';
    hideDisplay.style.display = 'inline-block';
    hideDisplay.style.borderBottom = 'solid 2px rgb(0 0 0 / 0.5)';
    hideDisplay.style.width = '400px';
    input.placeholder = "Start typing...";
    box.style.margin = 'auto';
    box.style.marginTop = '60px';
    box.style.width = '400px';
    box.style.backgroundColor = 'rgb(255 255 255 / 0.2)';
    box.style.border = 'solid 1px rgb(0 0 0 / 0.1)';
    box.style.borderRadius = '10px';
    input.focus()
    word(words);
    input.addEventListener('input', start);
    seconds = 30;
    timing;
    game;
    highscores.style.display = "none";
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
    }
}

/* -----------------------------------*/
/* High-Scores                        */
/* -----------------------------------*/


function calculatePercentage(highScore, words) {
    const numWords = words.length;
    if (numWords === 0) {
      return 0;
    }
    return ((highScore / numWords) * 100).toFixed(1);
}

// Retrieve the word array and high score from localStorage
const wordArray = JSON.parse(localStorage.getItem('wordArray')) || [];
const highScore = JSON.parse(localStorage.getItem('highScore')) || 0;

// Calculate the percentage
const percentage = calculatePercentage(highScore, wordArray);

// Store the percentage in localStorage
localStorage.setItem('percentage', JSON.stringify(percentage));

window.addEventListener("load", () => {
    displayHighScores()
});

function saveScore(score) {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
};

function displayHighScores() {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let highScoresList = document.querySelector(".scoreList");
    highScores.sort((a, b) => b - a);
    highScores = highScores.slice(0, 9);
    highScoresList.innerHTML = "";
    for (let i = 0; i < highScores.length; i++) {
      let li = document.createElement("li");
      li.textContent = `#${i + 1}: ${highScores[i]} words ${calculatePercentage(highScores[i], words)}%`;
      highScoresList.appendChild(li);
    }
};

clear.addEventListener('click', function() {
    localStorage.clear();
    window.location.reload()
});
