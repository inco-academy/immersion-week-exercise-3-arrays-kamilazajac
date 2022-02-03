module.exports = displayFullName;

function displayFullName(name) {
  let nameSplit = name.split(' ');
  let lastElem = nameSplit[nameSplit.length - 1];
  return `My name is ${lastElem}, ${name}`;
}
displayFullName('James Bond');
displayFullName('Ada Lovelace');
displayFullName('Salvador Felipe Jacinto Dalí');

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(displayFullName('James Bond'), 'My name is Bond, James Bond');
verify(displayFullName('Ada Lovelace'), 'My name is Lovelace, Ada Lovelace');
verify(
  displayFullName('Salvador Felipe Jacinto Dalí'),
  'My name is Dalí, Salvador Felipe Jacinto Dalí'
);
