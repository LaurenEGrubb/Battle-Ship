const rows = 10;
const columns = 10;
const squareSize = 50;
const otherSquareSize = 50;
let count = 0;
let hitCount = 0;
let enemyHitCount = 0;
const gameBoardContainerUser = document.getElementById("userGrid");
const gameBoardContainerAI = document.getElementById("AIGrid");

let gameBoardAI = [
[0,0,0,0,0,2,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,2,0,0,0,0,0],
[0,2,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,2,0,0,0,0,0,0,2,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
];

let gameBoardUser = [    
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]
];


//user Board//
for (i = 0; i < columns; i++) {
	for (j = 0; j < rows; j++) {
		
		
		var square = document.createElement("div");
		gameBoardContainerUser.appendChild(square);
		square.id = 's' + j + i;			
		square.className= "gridsquare"
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';					
    }	
}

//the AI game board//
for (i = 0; i < columns; i++) {
	for (j = 0; j < rows; j++) {
		
		
		var squaretwo = document.createElement("div");
		gameBoardContainerAI.appendChild(squaretwo);
		squaretwo.id = 's' + j + i;			
		squaretwo.className= "othergridsquare"
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		squaretwo.style.top = topPosition + 'px';
		squaretwo.style.left = leftPosition + 'px';					
    }	
}

//user Gameboard Squares//
const Squares = document.querySelectorAll('.gridsquare')
    for (i= 0; i < Squares.length; i++) {
        Squares[i].addEventListener('click', setUp)
    }
//AI Gameboard Squares//
const otherSquares = document.querySelectorAll(".othergridsquare")
    for (i = 0; i < otherSquares.length; i++) {
        otherSquares[i].addEventListener('click', missileLaunched)
    }
//set up for the User's Board//
function setUp(e) {
    if (gameBoardUser[e.target.id[2]][e.target.id[1]] == 0) {
        e.target.style.background = 'white';
        gameBoardUser[e.target.id[2]][e.target.id[1]] = 1
    }
    count ++
    if (count >= 6) {
    for (i= 0; i < Squares.length; i++) {
            Squares[i].removeEventListener('click', setUp)
    }  
    for (i= 0; i < Squares.length; i++) {
        Squares[i].addEventListener('click', missileLaunched)
        Squares[i].addEventListener('click', boardAttacked)
}  
 
    }
}
//function for the user to launch missile, after they launch the missile, boardAttacked is invoked to create an immersive experience//
function missileLaunched (e) { 
    //users missile launched code//
    console.log(e.target.id[2],e.target.id[1])
    if (gameBoardAI[e.target.id[2]][e.target.id[1]]== 0) {
        e.target.style.background = 'blue';
        gameBoardUser[e.target.id[2]][e.target.id[1]] = 3
     } else if (gameBoardAI[e.target.id[2]][e.target.id[1]] == 0) {
         e.target.style.background  = 'white';
         gameBoardAI[e.target.id[2]][e.target.id[1]] = 1;
     }else if (gameBoardAI[e.target.id[2]][e.target.id[1]] == 2) {
         e.target.style.background = 'red';
        
         
              }
              
     boardAttacked(e)
    }
 //used math.random for boardAttacked to randomly loop through the users boar
function boardAttacked (e) {
    let row= Math.floor(Math.random()*gameBoardUser.length)
    let column = Math.floor(Math.random()*gameBoardUser.length)
    if (gameBoardUser[row][column] === 1) {
        let userSquare = document.getElementById(`s${column}${row}`)
        userSquare.style.background = "red";
        gameBoardUser[row][column]= 2
     } else if (gameBoardUser[row][column] === 0) {
        let userSquare = document.getElementById(`s${column}${row}`)
        userSquare.style.background = "#FFFACD";
        gameBoardUser[row][column]= 3
            }
    }

  
