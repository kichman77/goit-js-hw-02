const findLongestWord = function (string) {
  // console.log(string);
  let arrayWord = string.split(" ");

  let longestWord = arrayWord[0];
  let wordLength = arrayWord[0].length;
  for (let i = 1; i < arrayWord.length; i++) {
    // console.log(arrayWord[i]);
    // console.log(arrayWord[i].length);
    if (wordLength < arrayWord[i].length) {
      wordLength = arrayWord[i].length;
      // console.log(wordLength);
      longestWord = arrayWord[i];
      // console.log(longestWord);
    }
  }
  return longestWord;
};

//  Вызовы функции для проверки работоспособности твоей реализации.

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// ("jumped");

console.log(findLongestWord("Google do a roll"));
// ("Google");

console.log(findLongestWord("May the force be with you"));
// ("force");
