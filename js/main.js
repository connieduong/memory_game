var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [cardOne, cardTwo];

var cardOne = [cards[0]];
cardsInPlay.push(cards);

var cardTwo = [cards[2]];
cardsInPlay.push(cards);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else { 
	alert("Sorry, try again");
}
