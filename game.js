import {update} from './bird.js'
import { birdMovement } from './bird.js'
import { ObstacleMovement } from './obstacles.js'
import {updateb} from './obstacles.js'
const startPage = document.getElementById('startpage')
const score = document.getElementById('score')
const a = document.getElementById('bird')
const b = document.getElementsByClassName('bottom-obstacle')
const backgroundImage = document.getElementById('background_image1')
const button = document.getElementById('changebackgroundbutton')
let maxOpacity = 1;
let o = 0;

var buttonclick = new Audio('button_click.mp3');

function main() {
    start()
}

function start() {
    birdMovement()
    ObstacleMovement()
}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case ' ':
        if(o===0) {
            startPage.parentNode.removeChild(startPage);
            score.style.opacity = maxOpacity;
            main() 
            o = 2
        }
        update()
        updateb()
}})

let cycleNumber = 0;
button.onclick = function changeBackground() {
    buttonclick.play();
if (cycleNumber === 0) {
    backgroundImage.style.opacity = 0;
    cycleNumber = 1;
    return
} 
if (cycleNumber === 1) {
    backgroundImage.style.opacity = maxOpacity;
    cycleNumber = 0;
}}