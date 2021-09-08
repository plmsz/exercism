export const parse = (sentence) => {
  const palavras = sentence.replace("_", "").match(/(\w+)('\w+)?/g);
  const resultado = []
  for (let i = 0; i < palavras.length; i++) {
    resultado.push(palavras[i][0].toUpperCase())
  }
  return resultado.join("")
};
