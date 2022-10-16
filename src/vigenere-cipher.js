const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.a = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }

  core(data, key, cb) {
    if (!data || !key) throw new Error("Incorrect arguments!");

    let final = "";
    let keyNew = "";

    while (keyNew.length < data.length) {
      keyNew += key.repeat(2);
    }

    keyNew = keyNew.substring(0, data.length);
    const newData = [...data]
      .filter((e) => this.a.includes(e.toUpperCase()))
      .join("");

    for (let i = 0; i < newData.length; i++) {
      if (this.a.includes(newData[i].toUpperCase())) {
        final += cb(newData, keyNew, this.a, i);
      }
    }

    const finalNew = [...final];

    for (let i = 0; i < data.length; i++) {
      if (!this.a.includes(data[i].toUpperCase())) {
        finalNew.splice(i, 0, data[i]);
      }
    }

    final = finalNew.join("");

    return this.mode ? final : final.split("").reverse().join("");
  }

  coreEncrypt(data, key, a, i) {
    return a[
      (data[i].toUpperCase().charCodeAt() + key[i].toUpperCase().charCodeAt()) %
        26
    ];
  }

  coreDecrypt(data, key, a, i) {
    return a[
      (data[i].toUpperCase().charCodeAt() +
        26 -
        key[i].toUpperCase().charCodeAt()) %
        26
    ];
  }

  encrypt(data, key) {
    return this.core(data, key, this.coreEncrypt);
  }

  decrypt(data, key) {
    return this.core(data, key, this.coreDecrypt);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
