const rows = 10;
const columns = 10;
const squareSize = 50;
const otherSquareSize = 50;
let count = 0;
let hitCount = 0;
const gameBoardContainerUser = document.getElementById("userGrid");
const gameBoardContainerAI = document.getElementById("AIGrid");

let gameBoardAI = [
[0,0,0,0,0,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,1,0,0,0,0,0],
[0,1,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,1,0,0,0,0,0,0,1,0],
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
		
		
		var square = document.createElement("div");
		gameBoarContainerAI.appendChild(square2);
		square2.id = 's' + j + i;			
		square2.className= "gridsquare2"
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		square2.style.top = topPosition + 'px';
		square2.style.left = leftPosition + 'px';					
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
    count ++
    if (count >= 6) {
    for (i= 0; i < Squares.length; i++) {
            Squares[i].removeEventListener('click', setUp)
    }  
    for (i= 0; i < Squares.length; i++) {
        Squares[i].addEventListener('click', missileLaunched)
}  
  
    }
}

function missileLaunched (e) { 
    //users missile launched code//
    if (gameBoardUser[e.target.id[2]][e.target.id[1]]== 0) {
        e.target.style.background = 'blue';
        gameBoardUser[e.target.id[2]][e.target.id[1]] = 3
     } else if (gameBoardUser[e.target.id[2]][e.target.id[1]] == 0) {
         e.target.style.background  = 'white';
         gameBoardUser[e.target.id[2]][e.target.id[1]] = 1;
     }else if (gameBoardUser[e.target.id[2]][e.target.id[1]] == 1) {
         e.target.style.background = 'red';
         hitCount++;
         if (hitCount == 5) {
             alert("All enemies have been defeated! You win !")
         }
     }
   //the ai's missile launched code//
   else if (gameBoardAI[e.target.id[2]][e.target.id[1]]== 0) {
       e.target.style.background = 'blue';
       gameBoardAI[e.target.id[2]][e.target.id[1]] = 3
    } else if (gameBoardAI[e.target.id[2]][e.target.id[1]] == 1) {
        e.target.style.background = 'red';   
        gameBoardAI[e.target.id[2]][e.target.id[1]] = 2;
        hitCount++;
        if (hitCount == 5) {
            alert("You lose")
        }

    }
     } 
    