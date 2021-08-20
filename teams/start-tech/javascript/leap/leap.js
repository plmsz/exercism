//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (ano) => {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)
};
