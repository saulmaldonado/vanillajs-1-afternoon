console.log("The house always wins!")

function reset(){
    document.getElementById("diamonds").style.color = null
    document.getElementById("hearts").style.color = null
    document.getElementById("spades").style.color = null
    document.getElementById("clubs").style.color = null
}


const idInput = document.getElementById("idInput")
const colorInput = document.getElementById("colorInput")

console.log(idInput)
console.log(colorInput)

function setCard(){
    var card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = colorInput.value
}
