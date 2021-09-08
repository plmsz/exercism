/**
 * Respond with the correct character, given the blurb, if this were said at
 * the front door.
 *
 * @param {string} blurb
 * @returns {string}
 */
 export function frontDoorResponse(blurb) {
    return blurb.trim()[0];
  }
  /**
   * Respond with the correct character, given the blurb, if this were said at
   * the back door.
   *
   * @param {string} blurb
   * @returns {string}
   */
  export function backDoorResponse(blurb) {
    return blurb.trim().slice(-1);
  }
  /**
   * Capitalizes a word, meaning only the first character is a capital, and the
   * remaining letters are lower case.
   *
   * @param {string} word
   * @returns {string}
   */
  function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  /**
   * Give the password for the front-door, given the responses.
   *
   * @param {string} responses the responses
   * @returns {string} the password
   */
  export function frontDoorPassword(responses) {
    return capitalize(responses);
  }
  /**
   * Give the password for the back-door, given the responses.
   *
   * @param {string} responses the responses
   * @returns {string} the password
   */
  export function backDoorPassword(responses) {
    return `${capitalize(responses)}, please`;
  }
  