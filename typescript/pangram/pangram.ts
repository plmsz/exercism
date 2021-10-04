export function isPangram(setence: string) {
  let filter = setence
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z");
  const uniqueLetters = new Set(filter);
  return uniqueLetters.size == 26;
}
