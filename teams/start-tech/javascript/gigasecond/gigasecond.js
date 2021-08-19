//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//Transformando a data em milisegundo e adicionando  1 gigasegundo
export const gigasecond = (dataInicial) => {
  const miliSeconds = +dataInicial + 1e12; 
  return new Date(miliSeconds) 
};

/* export const gigasecond = (initialDate) => {
  var secondsFromEpoch = initialDate.getTime();
  var result = new Date(secondsFromEpoch + 1e9 * 1000);
 return result;
};
 */