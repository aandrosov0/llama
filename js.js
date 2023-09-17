const FILES_PATH = './resources';
const KIND_MAX_IMAGES = 10;
const ALPACA = 'alpaca';
const LLAMA = 'llama';

const kinds = [ALPACA, LLAMA];
const informationBadResponses = [
    'Ты определенно не можешь различить их!',
    'Это легче, чем кажется!',
    'Ну же. Это очень легко!',
    'Закрой браузер, пожалуйста, не позорься ;)'
];

const informationSuccessResponses = [
    'Молодец! Так держать!',
    'Ты просто великолепен!',
    'Лучший из лучших!',
    'Да ты смешарик!'
];

var informationElement;
var imageElement;
var currentKind;
var llamaButton;
var alpacaButton;
var nextButton;

function main() {
    informationElement = document.getElementById('information');
    imageElement = document.getElementById('image');
    llamaButton = document.getElementById('llama_button');
    alpacaButton = document.getElementById('alpaca_button');
    nextButton = document.getElementById('next_button');

    llamaButton.onclick = function(){ guessKind(LLAMA) };
    alpacaButton.onclick = function(){ guessKind(ALPACA) };
    nextButton.onclick = function(){ generate() };

    generate();
}

function generate() {
    let kindIndex = Math.floor(Math.random() * kinds.length);
    currentKind = kinds[kindIndex];
    let count = Math.floor(Math.random() * (KIND_MAX_IMAGES)) + 1;
    image.src = `${FILES_PATH}/${currentKind}${count}.jpg`;

    alpacaButton.style.display = llamaButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
    informationElement.textContent = '';
}

function guessKind(kind) {
    if (kind == currentKind) {
        informationElement.textContent = informationSuccessResponses[
            Math.floor(Math.random() * informationSuccessResponses.length)
        ];
    } else {
        informationElement.textContent = informationBadResponses[
            Math.floor(Math.random() * informationBadResponses.length)
        ];
    }

    alpacaButton.style.display = llamaButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

window.onload = main;