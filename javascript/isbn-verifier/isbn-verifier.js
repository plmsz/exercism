export const isValid = (string) => {
  const re = /[a-w]|[y-z]/gi;
  const hifen = /-/g;

  let isbnArray = string.replace(re, '9').replace(hifen, "").split("");

  if (isbnArray.length != 10) return false;

  if (isbnArray[9] == 'X') {
    isbnArray[9] = isbnArray[9].replace('X', 10);
  }

  let validation = 0;

  for (let i = 0; i < isbnArray.length; i++) {
    validation += isbnArray[i] * (10 - [i]);
  }

  return validation % 11 == 0;
};
