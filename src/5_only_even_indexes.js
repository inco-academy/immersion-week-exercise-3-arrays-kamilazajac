function evenIndexes() {
  // TODO Implement me.
}
modules.exports = evenIndexes;
/**Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(evenIndexes('lol'), ['l', 'l']);
verify(evenIndexes("You're weird"), ['Y', 'u', 'r', ' ', 'e', 'r']);
verify(evenIndexes(''), []);
