/*
 * Respond with the correct character, given the blurb, if this were said at
 * the front door.*/
 
export function frontDoorResponse(blurb) {
  return blurb.trim()[0]
}

/**
 * Respond with the correct character, given the blurb, if this were said at
 * the back door.
 */
export function backDoorResponse(blurb) {
return blurb.trim().slice(-1)
}

/**
 * Capitalizes a word, meaning only the first character is a capital, and the
 * remaining letters are lower case.
 */
 function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
/**
 * Give the password for the front-door, given the responses.
 */
export function frontDoorPassword(responses) {
  return capitalize(responses) 
}

/**
 * Give the password for the back-door, given the responses.
 */
export function backDoorPassword(responses) {
  return capitalize(responses) + ', please'
}
