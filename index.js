let dealerSum = 0
let playerSum = 0

let dealerAce = 0
let playerAce = 0

let backCard
let cardDeck

let canHit = true;

window.onload = function() {
    deckOfCards();
    shuffleDeck();
    startGame();
}

function deckOfCards() {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q'];
    let types = ['C', 'D', 'H', 'S'];
    cardDeck = [];

    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < values.length; j++) {
            cardDeck.push(values[j] + "-" + types[i])
        }
    }
    
}

function shuffleDeck() {
    for(let i = 0; i < cardDeck.length; i++) {
        let j = Math.floor(Math.random() * cardDeck.length);
        let swap = cardDeck[i];
        cardDeck[i] = cardDeck[j];
        cardDeck[j] = swap;
    }
    
}

function startGame() {
    hidden = cardDeck.pop();
    dealerSum += getValue(hidden);
    dealerAce += checkAce(hidden)

    while (dealerSum < 17) {
        let cardImg = document.createElement("img")
        let card = cardDeck.pop()
        cardImg.src = "/assets/" + card + ".png"
        dealerSum += getValue(card)
        dealerAce += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg)
    }


    for (let i=0; i<2; i++) {
        let cardImg = document.createElement("img")
        let card = cardDeck.pop()
        cardImg.src = "/assets/" + card + ".png"
        playerSum += getValue(card)
        playerAce += checkAce(card);
        document.getElementById("player-cards").append(cardImg)
    }

    document.getElementById("hit").addEventListener("click", hit)
}

function hit(){
    if(!canHit){
        return;
    }
    let cardImg = document.createElement("img")
    let card = cardDeck.pop()
    cardImg.src = "/assets/" + card + ".png"
    playerSum += getValue(card)
    playerAce += checkAce(card);
    document.getElementById("player-cards").append(cardImg)

    if(reduceAce(playerSum,playerAce) > 21) {
        canHit = false;
    }

}




function getValue(card) {
    let data = card.split("-")
    let value = data[0]

    if(isNaN(value)) {
        if(value == "A") {
            return 11;
        }
        return 10;
    }
    return parseInt(value)
}

function checkAce(card) {
    if(card[0] == "A") {
        return 1;
    }
    return 0
}