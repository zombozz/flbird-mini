let b = 0;
let o = 0;
let a = b + 'vmin';
let topObstacle = document.getElementsByClassName('top-obstacle')
let bottomObstacle = document.getElementsByClassName('bottom-obstacle')
let q;
q = topObstacle[0].style.height;
const bird = document.getElementById('bird')
const bottom1 = document.getElementById('bottom1')
var rect1 = bird.getBoundingClientRect();
var rect2 = bottom1.getBoundingClientRect();
rect1.y = 0;
var wing = new Audio('wing.mp3');


const movement_speed = 0.8;
const jump_speed = 0.6;
const crashMessage = 'You crashed :( Press ok or the spacebar to try again'



export function birdMovement() {
   let birdY;
   setInterval( function() {
      b += movement_speed;
      a = b + 'vmin';
      bird.style.marginTop = a;
      rect1.y -= movement_speed;

      // console.log(rect1.y)
      if (rect1.y < -46 || rect1.y > 40) {
         
         if (confirm(crashMessage)) {
            rect1.y=0
            b=0
             window.location = '/'
         }
         return
      }
   },30)

}



export function update() {
   let i = 0;
   wing.play();
   let interval = setInterval( function() {

      b -= jump_speed;
      a = b + 'vmin';
      bird.style.marginTop = a;
      rect1.y += jump_speed;
      i++;
      if (i>20) {
         clearInterval(interval)
      }
      

   }, 1);
}


window.addEventListener('keydown', e => {
   switch (e.key) {
       case ' ':
       if(o===0) {
           rect1.y = 0;
           b = 0;
       o = 2;
       }
   }})