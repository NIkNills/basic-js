const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];

  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr.indexOf("--double-prev") - newArr.indexOf("--discard-next") ===
        2 ||
      newArr.indexOf("--discard-prev") - newArr.indexOf("--discard-next") === 2
    ) {
      const indexNext = newArr.indexOf("--discard-next") + 1;
      const index = newArr.indexOf("--discard-next");
      const prev = newArr.indexOf("--discard-next") + 2;
      if (index > -1 && indexNext > -1 && prev > -1) {
        newArr.splice(prev, 1);
        newArr.splice(indexNext, 1);
        newArr.splice(index, 1);
        return newArr;
      }
    }
    if (
      newArr.indexOf("--double-next") === newArr.length - 1 ||
      newArr.indexOf("--discard-next") === newArr.length - 1
    ) {
      newArr.splice(newArr.length - 1, 1);

      return newArr;
    }
    if (newArr[i] === "--double-next") newArr[i] = newArr[i + 1];
    if (newArr[i] === "--discard-next") {
      const indexNext = newArr.indexOf(newArr[i + 1]);
      const index = newArr.indexOf(newArr[i]);
      if (index > -1 && indexNext > -1) {
        newArr.splice(indexNext, 1);
        newArr.splice(index, 1);
        return newArr;
      }
    }
    if ("--double-prev" === newArr[0] || "--discard-prev" === newArr[0]) {
      newArr.splice(newArr[0], 1);
      return newArr;
    }
    if (newArr[i] === "--double-prev") {
      newArr[i] = newArr[i - 1];
    }

    if (newArr[i] === "--discard-prev") {
      const index = newArr.indexOf(newArr[i]);
      const indexPrev = newArr.indexOf(newArr[i - 1]);
      if (index > -1 && indexPrev > -1) {
        newArr.splice(index, 1);
        newArr.splice(indexPrev, 1);
        return newArr;
      }
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
