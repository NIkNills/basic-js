const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];

  for(let i = 0; i < matrix.length; i++) {
    let lastElemIndex = matrix[i].length - 1;

    result.push(matrix[i]);

    if(matrix[i][lastElemIndex] === 0) {
      break;
      result.push(matrix[i]);
    }
  }
  
  return result.flat().reduce((a, b) => a + b);
}

module.exports = {
  getMatrixElementsSum
};
