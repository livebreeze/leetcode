/* 
2024/4/17 used 1.5hrs
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var resultRowArr = [];
  var resultColArr = [];
  
  for (var i = 0; i < matrix.length; i++) {
      
      // process row
      var isRowIncludeZero = matrix[i].some(x => x === 0);
      if (isRowIncludeZero) {
          resultRowArr[i] = 0;          
      } else {
          resultRowArr[i] = 1;
      }
      
      // process col
      for (var j = 0; j < matrix[i].length; j++) {
          resultColArr[j] = resultColArr[j] === 0 ? 0 : 1;
          var isColIncludeZero = (matrix[i][j] * resultColArr[j]) === 0;
          if (isColIncludeZero) {
              resultColArr[j] = 0;          
          } else {
              resultColArr[j] = 1;
          }
      }
  }
  
  // modify matrix
  for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
          matrix[i][j] = matrix[i][j] * resultRowArr[i] * resultColArr[j];
      }
  }
};