var cards = ["queen" + "queen" + "king" + "king"];
var cardsInPlay = [cards.push('cardOne') + cards.push('cardTwo')];
var cardOne = cards[0];
console.log("User flipped queen");
var cardTwo = cards[2];
console.log("User flipped king")

var cards = [];
if ( cardsInPlay.length === 2) {
if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	alert("You found a match!");
} else { 
	console.log("Sorry, try again.");
	alert("Sorry, try again.");
} }
