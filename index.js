//create card deck
let game
let cardDeck
let value

function deckOfCards() {

let value = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10',  'J', 'Q', 'K']
let suite = ['C', 'D', 'S', 'H']
cardDeck = []



for (i=0; i < value.length; i++){
    for (j=0; j < suite.length; j++) {
       let cards = (value[i] + "-" + suite[j]);
        cardDeck.push(cards)
    }
    
}
console.log(cardDeck)
}

//call funcitons when window loads

window.onload = function() {
    deckOfCards();
    shuffleDeck()
    startGame();
    
}

//shuffle deck each time the game resets

function shuffleDeck() {
    for (let i = 0; i < cardDeck.length; i++){
        let j = Math.floor(Math.random() * cardDeck.length)
        let shuffle = cardDeck[i]
        cardDeck[i] = cardDeck[j]
        cardDeck[j] = shuffle 
    }
    
}


//set starting hand values

let playerHand = 0
let house = 0

//draw cards, need to give cards that are not displayed a value

let hiddenCards




//use .pop() to remove the last value in the array and pass it through as a "hidden card"

function startGame() {
    hiddenCards = cardDeck.pop()
    house += cardValue(hiddenCards) 
    

    //for (var i = 1; i<=1; i++) {
    //let cardImg = document.createElement("img");
    //let card = cardDeck.pop()
    //cardImg.src = "./assets/" + card + ".png"
    //house += cardValue(card)        
    //house[i] = document.getElementById('dealer-cards').append(cardImg)
    //
   // }
    
//produce logic for dealer to draw cards until 17
    while (house < 17) {
        //show dealer cards
        let cardImg = document.createElement("img");
        let card = cardDeck.pop()
        cardImg.src = "./assets/" + card + ".png"
        house += cardValue(card)
        document.getElementById('dealer-cards').append(cardImg)
        console.log(card)
        console.log(house)
    }

    for (i=0; i<2; i++) {
        let cardImg = document.createElement("img");
        let card = cardDeck.pop()
        cardImg.src = "./assets/" + card + ".png"
        playerHand += cardValue(card)
        document.getElementById('player-cards').append(cardImg)

    }
    document.getElementById('hit').addEventListener("click", hit)
    document.getElementById('stay').addEventListener("click", stay)
    document.getElementById('player-value').innerText = playerHand
    document.getElementById('submit').addEventListener("click", submitBtn)
   
}

function submitBtn() {
    var text = ""
    var inputs = document.getElementById('bet')
    for(var i = 0; i < inputs.length; i++){
        text += inputs[i].value
    }
    var p = document.createElement('p')
    var node = document.createTextNode(text)
    p.appendChild(p)
    document.getElementById()
   

}

//make strings numbers, give values to A,J,K,Q
function cardValue(card) {
    let number = card.split("-")
    let value = number[0]
    if (value) {
        if (value == "A") {
            return 11;
        }
        else if (value == "K" || value == "Q" || value == "J") {
            return 10;
        }
        return parseInt(value)   
    }
}




var hitAction = true

function hit() {
 if (playerHand < 21) {
    let cardImg = document.createElement("img");
    let card = cardDeck.pop()
    cardImg.src = "./assets/" + card + ".png"
    playerHand += cardValue(card)
    checkAce()
    document.getElementById('player-cards').append(cardImg) 
    document.getElementById('player-value').innerText = playerHand
    } 
    }


var resultMessage = " "


function stay() {



   document.getElementById("hidden-cards").src = '/assets/' + hiddenCards + '.png'
   document.getElementById('dealer-value').innerText = house
   document.getElementById('player-value').innerText = playerHand
   document.getElementById('results').innerText = resultMessage
      
   if (playerHand > 21) {
      resultMessage  = "You Lose"
   } 
   else if (house > 21) {
       resultMessage = "House Bust - You Win!!!"
   }
   else if (house === playerHand) {
        resultMessage = "Push"
   }
   else if (playerHand === 21) {
        resultMessage = "BLACKJACK!"
   }
   else if(playerHand > house) {
        resultMessage = "You Win!!"
   }
   else if(playerHand < house) {
        resultMessage = "You Lose"
   }
   
}

let bet;
let betInput
let money
let moneyDisplay

function betting(){

moneyDisplay = document.getElementById("money")
money = 100
moneyDisplay.innerHTML = "$" + money;
betInput = document.getElementById("bet")
betInput.value = 10;
}


//show dealer score as card gets drawn

//logic for dealer to lose


//produce logic for player to draw cards until 21
//show player score as cards get drawn
//show player cards
//logic for player win and win conditions
//logic for player loss

//button to hit
//button to stay
//allow dealer to draw cards after stay
//display win or loss
//reset game

//bet a value based for hand
//keep running tally on chip count
