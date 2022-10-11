const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    return members
      .filter((i) => typeof i === "string")
      .map((i) => i.trim().toUpperCase().slice(0, 1))
      .sort((a, b) => (a > b ? 1 : -1))
      .join("");
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
