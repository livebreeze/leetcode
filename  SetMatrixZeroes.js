/* 
2024/4/17
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  var listLength = matrix[0].length;
  var resultArr = [];

  for (var i = 0; i < matrix.length; i++) {
    resultArr.push(matrix[i]);
    // for (var l=0; l< matrix[i].length; l++) {
    //     resultArr[i][l] = matrix[i][l];
    // }
  }

  // process col
  for (var i = 0; i < listLength; i++) {
    var arrSum = 1;
    var colHasZero = false;
    for (const m of matrix) {
      arrSum = arrSum * m[i];
      if (arrSum === 0) {
        colHasZero = true;
        break;
      }
    }

    if (colHasZero) {
      for (var l = 0; l < resultArr.length; l++) {
        resultArr[l][i] = 0;
      }
    }
  }

  // process row
  for (var i = 0; i < matrix.length; i++) {
    if (matrix[i].some((x) => x === 0)) {
      var arrLength = matrix[i].length;
      for (var l = 0; l < arrLength; l++) {
        resultArr[i][l] = 0;
      }
    }
  }

  matrix = resultArr;
};
