export const isArmstrongNumber = (number) => {
  if (number == 0) {
    return true;
  }

  //Calclula quantos digitos tem o número
  const digit = Math.floor(Math.log10(number)) + 1;
  let sum = 0;

  //Converte o número para string
  const string = number.toString()

  //Pecorre a string (passa por cada digito do numero), transforma em número e calcula a soma de cada digito elevado ao numero de digitos
  for (let i = 0; i < digit; i++) {
    sum = sum + (+string[i]) ** digit;
  }
  //Verifica se é um número narcisista
  return (sum == number ? true : false);

};