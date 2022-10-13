const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const setup = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 1,
    additionSeparator: "|",
  };

  for (k in options) {
    setup[k] = options[k];
  }

  separator = String(setup["separator"]);

  addition = [...Array(setup["additionRepeatTimes"]).keys()]
    .map(() => String(setup["addition"]))
    .join(String(setup["additionSeparator"]));

  str = [...Array(setup["repeatTimes"]).keys()]
    .map(() => String(str) + addition)
    .join(separator);

  return str;
}

module.exports = {
  repeater,
};
