module.exports = removeDouble;

function removeDouble(arr) {
  const reversedArr = arr.reverse();
  const result = [...new Set(reversedArr)];

  return result.reverse();
}

removeDouble(['suit', 'clock', 'butter', 'suit']);
removeDouble(['hello', 'hello', 23, -3, 23, 'hello']);

/**Weryfikacja */

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(removeDouble(['suit', 'clock', 'butter', 'suit']), [
  'clock',
  'butter',
  'suit',
]);
verify(removeDouble(['hello', 'hello', 23, -3, 23, 'hello']), [
  -3,
  23,
  'hello',
]);
