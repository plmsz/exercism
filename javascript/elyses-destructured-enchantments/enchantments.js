export function getFirstCard(deck) {
  const [firstCard] = deck;
  return firstCard;
}

export function getSecondCard(deck) {
  const [, secondCard] = deck;
  return secondCard;
}

export function swapTopTwoCards(deck) {
  [deck[1], deck[0]] = [deck[0], deck[1]]
  return deck;
}


export function discardTopCard(deck) {
  const [topCard, ...others] = deck;
  return [topCard,others] 
}


export function insertFaceCards(deck) {
  const faceCards = ['jack', 'queen', 'king'];
  const [firstCard,...others] = deck;

  return [firstCard, ...faceCards, ...others]
}
