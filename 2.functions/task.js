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

  let sum = 0;

  for (i = 0; i < arr.length; i++) {

    sum += arr[i];
  }

  return sum;

};

function makeWork(arrOfArr, func) {

  let max = arrOfArr[0];
  let sumFunc = 0;

  for (i = 0; i < arrOfArr.length; i++) {
    
    sumFunc = func(arrOfArr[i]);

    if (max > sumFunc) {
      
      max = func(arrOfArr[i]);

    };


  };

  return max;

};

//console.log(makeWork([[1, 2, 3], [4, 5, 6]], worker));


//makeWork([[1, 2, 3, 4], [10, 20, -10, -20]], worker());

// Задание 3

function worker2(arr) {

  let min = Math.min(...arr);

  let max = Math.max(...arr);

  return Math.abs(min - max);

};
