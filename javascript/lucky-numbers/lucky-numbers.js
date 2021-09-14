export function twoSum(array1, array2) {
 const num1 = Number(array1.join(''))
 const num2 = Number(array2.join(''))
 return num1 + num2;
}

export function luckyNumber(value) {
  const reverse = String(value).split('').reverse().join('');
  return value == reverse;
}

export function errorMessage(input) {
  if (!input){
    return 'Required field'
  }else if(!Number(input)){
    return 'Must be a number besides 0';
  }else{
    return '';
  }
}
