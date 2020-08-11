
/*--------Variabels-------*/
// Create the variables for the players.
let currentPlayer = [1, 'Dealer']
let p1Total = 0; 
let dealerTotal = 0;
let deck, p1HandEl, dealerHandEl = [];
let winner;
let hand1 = new Array();
let hand2 = new Array();


/*-------Cached Element References--------*/
// Create the cached element references for the buttons.
const startBtn = document.getElementById('startBtn')
const hitBtn = document.getElementById('hitBtn')
const standBtn = document.getElementById('standBtn')
    count = 0;
const deckEl = document.getElementById('deck')
p1HandEl = document.getElementById('p1Hand')
dealerHandEl = document.getElementById('dealerHand')
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
    hand1 = [];
    hand2 = [];
    messageEl.innerText = `Let's Play Blackjack!`;
    shuffleCards();
    count = 0;
    winner = false;
    hitBtn.disabled = false;
    standBtn.disabled = false;
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
        acePresent = true;
    }
    return cardValue;
}

function total() {
    p1Total = 0;
    dealerTotal = 0;
    // acount for the ace 11 1 situation here at a later time
    for (i = 0; i < hand1.length; i++) {
        p1Total += getValue(hand1[i])
    }
    for (i = 0; i < hand2.length; i++) {
        if (hand2[i] === "dA" || hand2[i] === "hA" || hand2[i] === "cA" || hand2[i] === "sA" && dealerTotal > 21) {
            dealerTotal += 1;
        } else {
            dealerTotal += getValue(hand2[i])
        }
    }
}

function hit(){
    if (currentPlayer === 1) {
        let card1Picked = deck.shift();
        hand1.push(card1Picked);
        let p1HandEl = hand1.slice();
        total();
        checkWinner();
        end();
        render(card1Picked);
        console.log(p1Total);
        console.log(card1Picked);
        console.log(p1HandEl);
    } else {
        let card2Picked = deck.pop();
        hand2.push(card2Picked);
        let dealerHandEl = hand2.slice();
        total();
        checkWinner();
        end();
        // checkAce();
        console.log(dealerHandEl)
        console.log(card2Picked)
        console.log(dealerTotal)
    }
        // declare who the current player is 
        // push the card from the deck into the hand of the current player** 
        
        // currentPlayer.hand.push(cardPicked[0])
        // now figure out how to display the cards to the players deck   
}

function stand(){
    if (currentPlayer === 1) {
        currentPlayer = 2
        messageEl.innerText = `It's the Dealer's turn!`
        console.log('here')
        count += 1
        end();
        console.log(count)
    } else {
        currentPlayer = 1
        messageEl.innerText = `It's Player ${currentPlayer}'s turn!`
        count += 1
        checkWinner();
        console.log(count)
        end();
    }
}

function checkWinner () {
    if (p1Total === 21 && dealerTotal < 21) {
        winner = true;
        messageEl.innerText = `Player 1 wins! Press "Start a Game" to play again!`
        console.log('winner')
    } else if (p1Total > 21) {
        winner = true;
        messageEl.innerText = `Bust! Player 1 lost, press "Start a Game" to play again!`
        console.log('winner 2')
    } else if (dealerTotal === 21 && p1Total < 21) {
        winner = true;
        console.log('winner 3')
        messageEl.innerText = `Dealer wins! Press "Start a Game" to play again!`
    } else if (dealerTotal > 21) {
        winner = true;
        console.log('winner 4')
        messageEl.innerText = `Bust! Dealer lost, press "Start a Game" to play again!`
    } else if (count === 2){
        if (p1Total !== 21 && p1Total < 21 && dealerTotal !== 21 && dealerTotal < 21 && p1Total > dealerTotal) {
            winner = true;
            console.log('winner 5')
            messageEl.innerText = `Player 1 wins! Press "Start a Game" to play again!`
        } else if (p1Total === dealerTotal && p1Total < 21 && dealerTotal < 21){
            winner = true;
            console.log('tie')
            messageEl.innerText = `It's a tie! Press "Start a Game" to play again!`
            return 'tie';
        } else if (p1Total !== 21 && p1Total < 21 && dealerTotal !== 21 && dealerTotal < 21 && p1Total < dealerTotal) {
            winner = true;
            console.log('winner 6')
            messageEl.innerText = `Dealer wins! Press "Start a Game" to play again!`
        }
    }
}

function end() {
    if (count === 2){
        standBtn.disabled = true
        hitBtn.disabled = true
    } else if (winner === true && count === 2){
        standBtn.disabled = true;
        hitBtn.disabled = true;
    } else if (dealerTotal >= 17 && currentPlayer === 'Dealer'){
        hitBtn.disabled = true;
    } else {
        standBtn.disabled = false;
        hitBtn.disabled = false;
    }
}

function render(card1Picked) {
    if (hand1.length === 1) {  // Removes outline class when first card is picked
        p1HandEl.classList.remove("outline");
    }
    if (hand1.length > 1) {  // Removes previous picked card from deck 2 class list
        p1HandEl.classList.add(card1Picked);
    }
    cardToAdd = card1Picked;  // Sets card to be removed on next click
    p1HandEl.classList.add(card1Picked);  // Adds current card picked to deck 2 array
    if (hand1.length === 0) {  // Removes card back color and adds outline when last card is picked
        p1HandEl.classList.add("outline");
        p1HandEl.classList.remove("back-blue");
    }
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
 
