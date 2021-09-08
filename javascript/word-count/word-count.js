export const countWords = (sentenca) => {
  const minuscula = sentenca.toLowerCase();
  const palavras = minuscula.match(/(\w+)('\w+)?/g);
  // \w (any word alphanumeric) + (one more preceding) '\w(caractere) ? (optional) g (global)
  const resultado = { }

  console.log(palavras)

  for (const item of palavras) {
    resultado[item] ??= 0;
    resultado[item] += 1;
  }
  return resultado
}