// Задание 1
function getArrayParams(arr) {

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;

  for (i = 0; i < arr.length; i++) { 
    
    sum += arr[i];

  };

  let avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
};


// Задание 2
function worker(arr) {
  
  let sum = arr[0].reduce(function(a, b) {
    return a + b;
  });

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  for (i = 0; i < arrOfArr.length; i++) {
    if (func(arrOfArr[0]) > func(arrOfArr[1])) {
      let max = func(arrOfArr[0]);
    } else if (func(arrOfArr[1]) > func(arrOfArr[0])) {
      let max = func(arrOfArr[1]);
    };
  };

  
  return max;
};

// Задание 3
function worker2(arr) {
  // Ваш код
}
