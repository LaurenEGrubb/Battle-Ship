const rows = 10;
const columns = 10;
const squareSize = 50;
const smallrectangleSize = 50;
let hitCount = 0;
//const userGrid = document.getElementsByClassName("grid user-grid")
const gameBoardContainerUser = document.getElementById("userGrid");
const gameBoardContainerAI = document.getElementById("AIGrid")
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
]

//to make my ships draggable//
//const position = { x: 0, y: 0 }

//interact('.draggable').draggable({
 // listeners: {
   // start (event) {
     // console.log(event.type, event.target)
   //},
  //  move (event) {
  //    position.x += event.dx
  //    position.y += event.dy

   //   event.target.style.transform =
  //      `translate(${position.x}px, ${position.y}px)`
  //  },
 // }
//})

//to make my grid// 

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



// if board = 0 nothing is there. If board = 1 a ship is occupying the tile if it's 3 it is a miss and 2 means you hit it)
function missileLaunched (row, column) {
    if (gameBoardUser[row][column] == 0) {
        e.target.style.background = 'light blue';
        gameBoardUser[row][column] = 3;


    } else if (gameBoardUser[row][column] == 1) {
        e.target.style.background = 'red';
        gameBoardUser[row][column] = 2;
        hitCount++;
        if (hitcount == 17) {
            endGame()
        }
    } 
    console.log(missileLaunched)
}

gameBoardUser.addEventListener('click', missileLaunched, false)