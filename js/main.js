/*--------Variabels-------*/
// Create the variables for the players.
let currentPlayer = [1, 'Dealer']
let p1Total = 0; 
let dealerTotal = 0;
let deck = [];
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
const p1HandEl = document.getElementById('p1Hand')
const dealerHandEl = document.getElementById('dealerHand')
const messageEl = document.getElementById('message')
const displayTotal1 = document.getElementById('p1Total')
const displayTotal2 = document.getElementById('dealerTotal')


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
    newHand();
    total();
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
    if (card === "d06" || card === "h06" || card === "c06" || card === "s06"){
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
        cardValue = 1;
    }
    return cardValue;
}

function total() {
    p1Total = 0;
    dealerTotal = 0;
    let hasAce = false;
    for (i = 0; i < hand1.length; i++) {
        if ((hand1[i] === "dA" || hand1[i] === "hA" || hand1[i] === "cA" || hand1[i] === "sA") && p1Total < 11) {
            p1Total += 10;
            p1Total += getValue(hand1[i])
            console.log('less than 11')
        } else if ((hand1[i] === "dA" || hand1[i] === "hA" || hand1[i] === "cA" || hand1[i] === "sA") && p1Total > 11){
            p1Total += getValue(hand1[i]);
            console.log('higher than 11')
        } else {
            p1Total += getValue(hand1[i]);
            console.log('nothing')
        }
        if ((hand1.includes("dA") || hand1.includes("hA") || hand1.includes("cA") || hand1.includes("sA")) && p1Total > 21 && hasAce === false){
            p1Total -= 10;
            hasAce = true;
            console.log('avoid bust')
        }
    }
    for (i = 0; i < hand2.length; i++) {
        if ((hand2[i] === "dA" || hand2[i] === "hA" || hand2[i] === "cA" || hand2[i] === "sA") && dealerTotal < 11) {
            dealerTotal += 10;
            dealerTotal += getValue(hand2[i])
            console.log('less than 11')
        } else if ((hand2[i] === "dA" || hand2[i] === "hA" || hand2[i] === "cA" || hand2[i] === "sA") && dealerTotal > 11){
            dealerTotal += getValue(hand2[i]);
            console.log('higher than 11')
        } else {
            dealerTotal += getValue(hand2[i]);
            console.log('nothing')
        }
        if ((hand2.includes("dA") || hand2.includes("hA") || hand2.includes("cA") || hand2.includes("sA")) && dealerTotal > 21 && hasAce === false){
            dealerTotal -= 10;
            hasAce = true;
            console.log('avoid bust')
        } 
    }
}

function newHand() {
    let cardToAdd = deck.pop()
    hand1.push(cardToAdd)
    cardToAdd = deck.pop()
    hand1.push(cardToAdd)
    cardToAdd = deck.pop()
    hand2.push(cardToAdd)
    cardToAdd = deck.pop()
    hand2.push(cardToAdd)
    total();
    render();
}

function hit(){
    if (currentPlayer === 1) {
        let card1Picked = deck.shift();
        hand1.push(card1Picked);
        let p1HandEl = hand1.slice();
        total();
        checkWinner();
        end();
        render();
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
        render();
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
        count += 1
        end();
    } else {
        currentPlayer = 1
        messageEl.innerText = `It's Player ${currentPlayer}'s turn!`
        count += 1
        checkWinner();
        end();
    }
}

function checkWinner () {
    if (p1Total === 21 && dealerTotal < 21 && count === 2) {
        winner = true;
        messageEl.innerText = `Player wins! Press "New Deal" to play again!`
        console.log('winner')
    } else if (p1Total > 21) {
        winner = true;
        messageEl.innerText = `Bust! Player lost, press "New Deal" to play again!`
        console.log('winner 2')
    } else if (dealerTotal === 21 && p1Total < 21) {
        winner = true;
        console.log('winner 3')
        messageEl.innerText = `Dealer wins! Press "New Deal" to play again!`
    } else if (dealerTotal > 21) {
        winner = true;
        console.log('winner 4')
        messageEl.innerText = `Player wins! Press "New Deal" to play again!`
    } else if (count === 2){
        if (p1Total !== 21 && p1Total < 21 && dealerTotal !== 21 && dealerTotal < 21 && p1Total > dealerTotal) {
            winner = true;
            console.log('winner 5')
            messageEl.innerText = `Player wins! Press "New Deal" to play again!`
        } else if (p1Total === dealerTotal && p1Total < 21 && dealerTotal < 21){
            console.log('tie')
            messageEl.innerText = `It's a tie! Press "New Deal" to play again!`
            winner = true;
        } else if (p1Total !== 21 && p1Total < 21 && dealerTotal !== 21 && dealerTotal < 21 && p1Total < dealerTotal) {
            console.log('winner 6')
            messageEl.innerText = `Dealer wins! Press "New Deal" to play again!`
            winner = true;
        }
    }
}

function end() {
    // if (count === 2){
    //     standBtn.disabled = true
    //     hitBtn.disabled = true
    // } 
    // if (winner === true){
    //     standBtn.disabled = true;
    //     hitBtn.disabled = true;
    // } 
    // if (dealerTotal >= 17 && currentPlayer === 'Dealer'){
    //     hitBtn.disabled = true;
    // } else {
    //     standBtn.disabled = false;
    //     hitBtn.disabled = false;
    // }
}

function render(){
    p1HandEl.innerHTML = ''
    dealerHandEl.innerHTML = ''
    hand1.forEach((card) => {
        let newDiv = document.createElement('div')
        newDiv.className = `card large ${card}`
        console.log(newDiv)
        p1HandEl.appendChild(newDiv)
    })
    hand2.forEach((card) => {
        let newDiv = document.createElement('div')
        newDiv.className = `card large ${card}`
        console.log(newDiv)
        dealerHandEl.appendChild(newDiv)
    })
    displayTotal1.innerText = `Total: ${p1Total}`
    displayTotal2.innerText = `Total: ${dealerTotal}`
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