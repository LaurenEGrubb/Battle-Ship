const rows = 10;
const columns = 10;
const squareSize = 50;
const smallrectangleSize = 50;
const controller = new AbortController()
let count = 0;
let hitCount = 0;
let Destroyer = [1]
//const userGrid = document.getElementsByClassName("grid user-grid")
const gameBoardContainerUser = document.getElementById("userGrid");
const gameBoardContainerAI = document.getElementById("AIGrid");

//let gameBoardAI = [
//[0,0,0,0,0,1,0,0,0,0],
//[0,0,0,0,0,0,0,0,0,0],
//[0,0,0,0,0,0,0,0,0,0],
//[0,0,0,0,1,0,0,0,0,0],
//[0,1,0,0,0,0,0,0,0,0],
//[0,0,0,0,0,0,0,0,0,0],
//[0,0,0,0,0,0,0,0,0,0],
//[0,1,0,0,0,0,0,0,1,0],
//[0,0,0,0,0,0,0,0,0,0],
//[0,0,0,0,0,0,0,0,0,0]
//];

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

//makes the gameboard user grid//
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

//making the AI game board grid//
//for (i = 0; i < columns; i++) {
	//for (j = 0; j < rows; j++) {
		
		
		//var square = document.createElement("div");
		//gameBoarContainerAI.appendChild(square);
		//square.id = 's' + j + i;			
		//square.className= "gridsquare"
		//var topPosition = j * squareSize;
		//var leftPosition = i * squareSize;			
		//square.style.top = topPosition + 'px';
		//square.style.left = leftPosition + 'px';					
  //  }	
//}



const Squares = document.querySelectorAll('.gridsquare')
    for (i= 0; i < Squares.length; i++) {
        Squares[i].addEventListener('click', setUp)
    }


function setUp(e) {
    count ++
    if (count >= 6) {
        //setUp(null)
        for (i= 0; i < Squares.length; i++) {
            Squares[i].removeEventListener('click', setUp)
    }  
    for (i= 0; i < Squares.length; i++) {
        Squares[i].addEventListener('click', missileLaunched)
}  
    } if (gameBoardUser[e.target.id[2]][e.target.id[1]] == 0) {
        e.target.style.background  = 'white';
        gameBoardUser[e.target.id[2]][e.target.id[1]] = 1;
    }


}

//document.getElementById('start').onclick = function missileLaunched(){}

//const Squares = document.querySelectorAll('.gridsquare')
//for (i = 0; i < Squares.length; i++) {
  //  Squares[i].addEventListener('click',(e) => missileLaunched(e), false)
//}


function missileLaunched (e) { 
     if (gameBoardUser[e.target.id[2]][e.target.id[1]]== 0) {
       e.target.style.background = 'blue';
       gameBoardUser[e.target.id[2]][e.target.id[1]] = 3

        hitCount++;
        if (hitCount == 5) {
            endGame()
        }
     } 
    }
   
//function placeBattleShip(e,gameBoardUser) {
//for (i = 0; i < gameBoardUser.length; i++) {
  //  var split = gameBoardUser[i].split()
    //let gameBoardUser[i].split() = gameBoardUser
//}
//}


//gameBoardUser.splice(index, )


//I think using the slice method will be beneficial in this case)
//function placeBattleShip (e, row, column){
   // gameBoardUser[e.target.id[1][e.target.id[2]]] = 1
  //  e.target.style.backgroundColor = 'green'
//}