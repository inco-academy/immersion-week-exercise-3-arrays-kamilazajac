module.exports = replaceArray;

function replaceArray(arr) {
  let arr2 = [];
  arr.forEach((el) => {
    let firstLetter = el.substring(0, 1);
    if (firstLetter === 'h') {
      wordToUpper = el.toUpperCase();
      len = arr2.push(wordToUpper);
    } else if (firstLetter === 'H') {
      wordToUpper = el.toUpperCase();
      len = arr2.push(wordToUpper);
    } else {
      len = arr2.push(el);
    }
  });
  return arr2;
}
replaceArray(['banana', 'suit', 'hammer']);
replaceArray(['Hello', 'there']);
replaceArray(['Hey!', 'hey...']);

/**Weryfikacja */

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(replaceArray(['banana', 'suit', 'hammer']), [
  'banana',
  'suit',
  'HAMMER',
]);
verify(replaceArray(['Hello', 'there']), ['HELLO', 'there']);
verify(replaceArray(['Hey!', 'hey...']), ['HEY!', 'HEY...']);
