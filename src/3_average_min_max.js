module.exports = averageMinMax;

function averageMinMax(arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  arr.forEach(function (value) {
    if (value < min) min = value;
    if (value > max) max = value;
    sum += value;
  });
  let avg = sum / arr.length;
  return `Min: ${min} Max: ${max} Average: ${avg}`;
}

averageMinMax([-42, 0, 42]);
averageMinMax([30, 20, 100]);
averageMinMax([-23, -4, -12]);

/**Weryfikacja */
function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(averageMinMax([-42, 0, 42]), 'Min: -42 Max: 42 Average: 0');
verify(averageMinMax([30, 20, 100]), 'Min: 20 Max: 100 Average: 50');
verify(averageMinMax([-23, -4, -12]), 'Min: -23 Max: -4 Average: -13');
