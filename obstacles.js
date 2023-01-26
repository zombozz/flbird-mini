const movement_speed = 0.8;
const jump_speed = 0.6;
const gap = 70;

let i = 0;
let o = 0;
let topObstacle = document.getElementsByClassName('top-obstacle')
let bottomObstacle = document.getElementsByClassName('bottom-obstacle')
let b = 0;
let a = b + 'vmin';
let aa;
let aaa;
let bb = 0;
let bbb = 0;
let randomNumber; 
let obstacle1 = 0;
let obstacle2 = 0;
let obstacle3 = 0;
let firstBottomHeight;
let firstTopHeight;
let secondBottomHeight;
let secondTopHeight;
let thirdBottomHeight;
let thirdTopHeight;
let first = 0;
const bird = document.getElementById('bird')
const birdY = bird.getBoundingClientRect();
birdY.y = 0;

var point = new Audio('point.mp3');
var hit = new Audio('hit.mp3');

const crashMessage = 'You crashed :( Press ok or the spacebar to try again'
const score = document.getElementById('score')
let scoreNumber = 0;
score.innerText = scoreNumber;

export function ObstacleMovement() {
    
    setInterval( function() {
        function randomNumberGenerator(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
        score.textContent = scoreNumber;
        randomNumber = randomNumberGenerator(10, 50)

        let randomTopHeight = randomNumber + 'vmin';
        let randomBottomHeight = gap - randomNumber + 'vmin';
        let firstHeight = 30 + 'vmin';
        // let parsedTopObstacle1 = parseInt(a);
        // let parsedTopObstacle2 = parseInt(aa);
        // let parsedTopObstacle3 = parseInt(aaa);
        // let tempa = 20 + 'vmin';
        // let tempb = 40 + 'vmin';

        if (first < 60) {
            topObstacle[0].style.height = firstHeight;
            bottomObstacle[0].style.height = firstHeight;
            firstTopHeight = firstHeight;
            firstBottomHeight = firstHeight;

            topObstacle[1].style.height = firstHeight;
            bottomObstacle[1].style.height = firstHeight;
            secondTopHeight = firstHeight;
            secondBottomHeight = firstHeight;

            topObstacle[2].style.height = firstHeight;
            bottomObstacle[2].style.height = firstHeight;
            thirdTopHeight = firstHeight;
            thirdBottomHeight = firstHeight;
        }

        if (parseInt(a) > 100) {
            b=-40;
            topObstacle[0].style.height = randomTopHeight;
            bottomObstacle[0].style.height = randomBottomHeight;
            firstTopHeight = randomTopHeight;
            firstBottomHeight = randomBottomHeight;
        }

        if (parseInt(aa) > 100) {
            bb=0;
            topObstacle[1].style.height = randomTopHeight;
            bottomObstacle[1].style.height = randomBottomHeight;
            secondTopHeight = randomTopHeight;
            secondBottomHeight = randomBottomHeight;
        }

        if (parseInt(aaa) > 100) {
            bbb=40;
            topObstacle[2].style.height = randomTopHeight;
            bottomObstacle[2].style.height = randomBottomHeight;
            thirdTopHeight = randomTopHeight;
            thirdBottomHeight = randomBottomHeight;
        }

        if (obstacle1 > 74) {
            obstacle1 = -66;
            scoreNumber += 1;
            point.play();
        }
        if (obstacle2 > 114) {
            obstacle2 = -26;
            scoreNumber += 1;
            point.play();
        }
        if (obstacle3 > 154) {
            obstacle3 = 14;
            scoreNumber += 1;
            point.play();
        }

        if (obstacle1 < -50) {
            if((birdY.y < parseInt(firstBottomHeight) - 45) || birdY.y >= (41 - parseInt(firstTopHeight))) 
            {
                hit.play();
                if (confirm(crashMessage)) {
                    birdY.y = 0;
                    firstBottomHeight = null;
                    firstTopHeight = null;
                 window.location = '/'
             }
             return
            }
        }

        if (obstacle2 < -10) {
            if((birdY.y < parseInt(secondBottomHeight) - 45) || birdY.y >= (41 - parseInt(secondTopHeight))) 
            {
                hit.play();
                if (confirm(crashMessage)) {
                    birdY.y = 0;
                    secondBottomHeight = null;
                    secondTopHeight = null;
                 window.location = '/'
             }
             return
            }
        }
        
        if (obstacle3 < 30 && first > 100) {
            if((birdY.y < parseInt(thirdBottomHeight) - 45) || birdY.y >= (41 - parseInt(thirdTopHeight))) 
            {
                hit.play();
                if (confirm(crashMessage)) {
                    birdY.y = 0;
                    thirdBottomHeight = null;
                    thirdTopHeight = null;
                 window.location = '/'
             }
             return
            }
        }

        first += 1;
        obstacle1 +=1;
        obstacle2 +=1;
        obstacle3 +=1;
        //  console.log(birdY.y)
        //  console.log(obstacle1)
        // //  console.log(parseInt(firstBottomHeight))
        //     console.log(parseInt(firstTopHeight))
        b += 1;
        bb += 1;
        bbb += 1;
        a = b + '%';
        aa = bb - 40 + '%';
        aaa = bbb - 80 + '%';


        topObstacle[0].style.right = a;
        topObstacle[1].style.right = aa;
        topObstacle[2].style.right = aaa;
        bottomObstacle[0].style.right = a;
        bottomObstacle[1].style.right = aa;
        bottomObstacle[2].style.right = aaa;
       //console.log(parsedTopObstacle)
       
       },40)
 }



 setInterval( function() {
    birdY.y -= movement_speed;
 },30)

  export function updateb() {
    let i = 0;
    let interval = setInterval( function() {
       birdY.y += jump_speed;
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
            birdY.y = 0;
        o = 2;
        }
    }})