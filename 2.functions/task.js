// Задание 1
function getArrayParams(arr) {

  let min = (Math.min(...arr));
  let max = (Math.max(...arr));
  let sum = 0;

  for (i = 0; i < arr.length; i++) { 
    
    sum += arr[i];

  };

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
};


// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
