let input = ' ';
const numbers = [];
let total = 0;

while (input) {
  input = prompt('Введите число');
// console.log(input);
  if (input === null) {
    alert('Отменено пользователем');
//    console.log(input);

  } else {
    input = Number(input);
    numbers.push(input);
    if (!isNaN(input));
    total += input;
  }

}
//console.log(numbers);
for (let number of numbers) {
  total += number;

}
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
//console.log(numbers);
console.log(`Общая сумма чисел равна ${total}`);
