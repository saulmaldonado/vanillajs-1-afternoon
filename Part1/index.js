
var board = []

function gameOver(){
    document.getElementById("0").onclick = null
    document.getElementById("1").onclick = null
    document.getElementById("2").onclick = null
    document.getElementById("3").onclick = null
    document.getElementById("4").onclick = null
    document.getElementById("5").onclick = null
    document.getElementById("6").onclick = null
    document.getElementById("7").onclick = null
    document.getElementById("8").onclick = null
}

function reset(){
    board = []
    document.getElementById("0").innerText = ""
    document.getElementById("1").innerText = ""
    document.getElementById("2").innerText = ""
    document.getElementById("3").innerText = ""
    document.getElementById("4").innerText = ""
    document.getElementById("5").innerText = ""
    document.getElementById("6").innerText = ""
    document.getElementById("7").innerText = ""
    document.getElementById("8").innerText = ""
    
}


function play(clickedId){
    const clickedElement = document.getElementById(clickedId)
    const playerSpan = document.getElementById("player")
    if(playerSpan.innerText === "X"){
        playerSpan.innerText = "O"
        clickedElement.innerText = "X"
        clickedElement.onclick = null
        board[clickedId] = "X"
    } else {
        playerSpan.innerText = "X"
        clickedElement.innerText = "O"
        clickedElement.onclick = null
        board[clickedId] = "O"
    }
    console.log(board)

    const topLeft = board[0]
    const topMiddle = board[1]
    const topRight = board[2]
    const middleLeft = board[3]
    const middleMiddle = board[4]
    const middleRight = board[5]
    const bottomLeft = board[6]
    const bottomMiddle = board[7] 
    const bottomRight = board[8]

    if(topRight !== undefined && topLeft === topMiddle && topMiddle === topRight){
        alert(topLeft + " is the winner!")
        reset()
        gameOver()
    }
    
    if (middleRight !== undefined && middleLeft === middleMiddle && middleMiddle === middleRight){
         alert(middleLeft + " is the winner!")
         reset()
         gameOver()
         
    }
    if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomMiddle === bottomRight){
         alert(bottomLeft + " is the winner!")
         reset()
         gameOver()
    }
    if (topLeft !== undefined && middleMiddle === topLeft && middleMiddle === bottomRight){
         alert(bottomRight + " is the winner!")
         reset()
         gameOver()
    }
    if (topRight !== undefined && middleMiddle === topRight && middleMiddle === bottomLeft){
         alert(topRight + " is the winner!")
         reset()
         gameOver()
    }
    if (topLeft !== undefined && middleLeft === topLeft && bottomLeft === middleLeft){
         alert(topLeft + " is the winner!")
         reset()
         gameOver()
    }
    if (topMiddle !== undefined && middleMiddle === topMiddle && bottomMiddle === middleMiddle){
         alert(topMiddle + " is the winner!")
         reset()
         gameOver()
    }
    if (topRight !== undefined && middleRight === topRight && bottomRight === middleRight){
         alert(topRight + " is the winner!")
         reset()
         gameOver()
    }
         var boardFull = true
    for(i = 0; i <= 8; i++){
        if(board[i] === undefined){
            boardFull = false
        }
    }

        if(boardFull === true){
            alert("Cats game, there is no winner")
            reset()
            gameOver()
        }

}