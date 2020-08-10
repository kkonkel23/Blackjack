
/*--------Variabels-------*/
// Create the variables for the players.
let currentPlayer = [1, 2]
let p1Total = 0 
let p2Total = 0;
let deck, p1HandEl, p2HandEl = [];
let winner;

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
init();
 
function init(){
    deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"];
    currentPlayer = 1;
    messageEl.innerText = `Let's Play Blackjack!`;
    shuffleCards();
}

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

function getValue(card) {
    let cardValue;
    if (card === "dQ" || card === "dK" || card === "dJ" || card === "d10" || card === "hQ" || card === "hK" || card === "hJ" || card === "h10" || card === "cQ" || card === "cK" || card === "cJ" || card === "c10" || card === "sQ" || card === "sK" || card === "sJ" ||card === "s10"){
        cardValue = 10;
    }
    if (card === "d09" || card === "h09" || card === "c09" || card === "s09"){
        cardValue = 9;
    }
    if (card === "d08" || card === "h08" || card === "c08" |card === "s08"){
        cardValue = 8;
    }
    if (card === "d07" || card === "h07" || card === "c07" || card === "s07"){
        cardValue = 7;
    }
    if (deck === "d06" || card === "h06" || card === "c06" || card === "s06"){
        cardValue = 6;
    }
    if (card === "d05" || card === "h05" || card === "c05" || card === "s05"){
        cardValue = 5;
    }
    if (card === "d04" || card === "h04" || card === "c04" || card === "s04"){
        cardValue = 4;
    }
    if (card === "d03" || card === "h03" || card === "c03" || card === "s03"){
        cardValue = 3;
    }
    if (card === "d02" || card === "h02" || card=== "c02" || card === "s02"){
        cardValue = 2;
    }
    if (card === "dA" || card === "hA" || card === "cA" || card === "sA"){
        cardValue = 11;
    }
    return cardValue;
}

function total() {
    p1Total = 0;
    p2Total = 0;
    // acount for the ace 11 1 situation here at a later time
    for (i = 0; i < hand1.length; i++) {
        p1Total += getValue(hand1[i])
    }
    for (i = 0; i < hand2.length; i++) {
        p2Total += getValue(hand2[i])
    }
}
function hit(){
    if (currentPlayer === 1) {
        let card1Picked = deck.shift();
        hand1.push(card1Picked);
        let p1HandEl = hand1.slice();
        total();
        console.log(p1Total);
        console.log(card1Picked);
        console.log(p1HandEl);
    } else {
        let card2Picked = deck.pop();
        hand2.push(card2Picked);
        let p2HandEl = hand2.slice();
        getValue();
        total();
        console.log(p2HandEl)
        console.log(card2Picked)
        console.log(p2Total)
    }
        // declare who the current player is 
        // push the card from the deck into the hand of the current player** 
        
        // currentPlayer.hand.push(cardPicked[0])
        // now figure out how to display the cards to the players deck   
}

function stand(){
    if (currentPlayer === 1) {
        currentPlayer = 2
        messageEl.innerText = `It's Player ${currentPlayer}'s turn!`
    } else {
        currentPlayer = 1
        messageEl.innerText = `It's Player ${currentPlayer}'s turn!`
    }
}

// function checkWinner () {
//     if (currentPlayer === 1) {
//         if (p1Total === 21 && p2Total < 21) {
//             winner = currentPlayer;
//             messageEl.innerText = `Congratulations ${winner}! Press "Start a Game" to play again!`
//         } else if (p1Total > 21) {
//             messageEl.innerText = `Bust! Player ${currentPlayer} lost, press "Start a Game" to play again!`
//         } else if (p1Total !== 21 && p1Total < 21 && p2Total !== 21 && p2Total < 21 && p1Total > p2Total) {
//             winner = currentPlayer;
//             messageEl.innerText = `Congratulations ${winner}! Press "Start a Game" to play again!`
//         }
//     }
// }

function end() {

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
 
 