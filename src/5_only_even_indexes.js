module.exports = evenIndexes;
function evenIndexes(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i += 2) {
    // take every second element
    arr2.push(arr[i]);
  }
  return arr2;
}
evenIndexes('lol');
evenIndexes("You're weird");
evenIndexes('');

/**Weryfikacja */

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(evenIndexes('lol'), ['l', 'l']);
verify(evenIndexes("You're weird"), ['Y', 'u', 'r', ' ', 'e', 'r']);
verify(evenIndexes(''), []);
