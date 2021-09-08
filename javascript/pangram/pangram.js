//
//,This,is,only,a,SKELETON,file,for,the,'Pangram',exercise.,It's,been,provided,as,a
//,convenience,to,get,you,started,writing,code,faster.
//

// import { is } from "core-js/core/object";

export const isPangram = (sentence) => {

  if (sentence === "") return false;

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  const chars = sentence.toLowerCase().split("");

  for (let letter of alphabet) {
    if (!chars.includes(letter)) {
      return false;
    }
  }
  return true;

};

