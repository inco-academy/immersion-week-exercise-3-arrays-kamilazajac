module.exports = matrixGen;

function matrixGen(height, width) {
  let multiDimArr = [];
  for (h = 0; h < height; h++) {
    multiDimArr[h] = [];
    for (w = 0; w < width; w++) {
      multiDimArr[h][w] = (h + 1) * (w + 1);
    }
  }

  return multiDimArr;
}

console.table(matrixGen(5, 4));

/**Weryfikacja */

function verify(input, goal) {
  if (input.toString() === goal.toString()) {
    console.log('Gratulacje!');
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(matrixGen(1, 5), [[1, 2, 3, 4, 5]]);
verify(matrixGen(5, 4), [
  [1, 2, 3, 4],
  [2, 4, 6, 8],
  [3, 6, 9, 12],
  [4, 8, 12, 16],
  [5, 10, 15, 20],
]);
verify(matrixGen(3, 6), [
  [1, 2, 3, 4, 5, 6],
  [2, 4, 6, 8, 10, 12],
  [3, 6, 9, 12, 15, 18],
]);
verify(matrixGen(0, 0), []);
