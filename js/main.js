
/*--------Variabels-------*/
// Create the variables for the players.
let currentPlayer = [1, 2]
let total;
let deck, p1HandEl, p2HandEl = [];
let value = 

/*-------Cached Element References--------*/
// Create the cached element references for the buttons.
const startBtn = document.getElementById('startBtn')
const hitBtn = document.getElementById('hitBtn')
const standBtn = document.getElementById('standBtn')
const deckEl = document.getElementById('deck')
p1HandEl = document.getElementById('p1Hand')
p2HandEl = document.getElementById('p2Hand')
const messageEl = document.getElementById('message')

/*-------Event Listeners-------*/
startBtn.addEventListener('click', init)
hitBtn.addEventListener('click', hit)
standBtn.addEventListener('click', stand)

/*-------Functions-------*/
// Create the initial function and call for it code the card deck.
init()
 
function init(){
    deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    currentPlayer = 1;
    messageEl.innerText = `Let's Play Blackjack!`;
    shuffleCards();
    console.log(currentPlayer);
}

// function start() {
//     messageEl.innerText = `It's Player 1's turn`
// }
// Shuffle function
function shuffleCards(){
    let currentIdx = deck.length, tempVal, randomIndex;
    while (0 !== currentIdx) {
        randomIndex = Math.floor(Math.random()* currentIdx);
        currentIdx -= 1;
        tempVal = deck[currentIdx];
        deck[currentIdx] = deck[randomIndex];
        deck[randomIndex] = tempVal;
    }
    return deck;
}

let hand1 = new Array();
let hand2 = new Array();

function hit(){
    if (currentPlayer === 1) {
        let card = deck.pop();
        hand1.push(card);
        let p1HandEl = hand1.slice();
        console.log(p1HandEl);
    } else {
        let card = deck.pop();
        hand2.push(card);
        let p2HandEl = hand2.slice();
        console.log(p2HandEl)
    }
        // declare who the current player is 
        // push the card from the deck into the hand of the current player** 
        
        // currentPlayer.hand.push(cardPicked[0])
        // now figure out how to display the cards to the players deck

       
    
}

function stand(){
    console.log(`It's ${currentPlayer}'s turn!`)
    if (currentPlayer === 1) {
        currentPlayer = 2
        messageEl.innerText = `It's Player ${currentPlayer}'s turn!`
    } else {
        currentPlayer = 1
        messageEl.innerText = `It's Player ${currentPlayer}'s turn!`
    }
}

function render(car, player){
    let hand = document.getElementById('hand' + player)

}
// Create a function for shuffling the cards.


// Create the start game function.

// Get the total to show up once the first cards are dealt
// Create the function to deal the hand.
// Create the render function for the cards.
// Create the hit function.
// Get the total of the cards to correspond with the hit function.
// Create the stay function.
// Create the checkWinner function, winner with the closest to 21 without going over wins
    //include here the check if the player busted(going over 21)
// Include messages specified to whether the game is won, lost, or tied(had the same number). At the end of this add, Congrats or too bad or it's a tie, then after add, click Start a Game to play again!
 
 