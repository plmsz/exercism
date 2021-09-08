import { throws } from "assert";

export const compute = (left, right) => {

  if (left.length === right.length) {
    if (left == "" || left == right) {
      return 0;
    } else {
      if (left.length == 1) {
        return 1;
      } else {
        let count = 0;
        for (let i = 0; i < left.length; i++) {
          if (left[i] != right[i]) {
            count++
          }
        }
        return count;
      }
    }
  } else {
    if (left == "") {
      throw new Error('left strand must not be empty')
    } else if (right == "") {
      throw new Error('right strand must not be empty')
    } else {
      throw new Error('left and right strands must be of equal length');
    }
  }
};