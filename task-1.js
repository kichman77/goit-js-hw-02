const logItems = function (array) {
  for (let i = 0; i < array.length; i = i + 1) {
    console.log(`${i+1} - ${array[i]}`);
  }
};

logItems(["Mango", "Polly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 40, 45, 50]);

