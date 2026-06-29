const strNoPunctuation = function (str) {
    return str.replaceAll(" ", "").replaceAll(",", "").replaceAll(".", "").replaceAll("!", "").toLowerCase();
}

const getReversedStr = function (str) {
    return str.split("").reverse().join("");
}

const palindromes = function (str) {
    const noPunctuation = strNoPunctuation(str);
    const reversed = getReversedStr(noPunctuation);
    return reversed === noPunctuation;
};

const noPunctuation = strNoPunctuation("A car, a man, a maraca.");
const reversed = getReversedStr(noPunctuation);
console.log(noPunctuation);
console.log(reversed);

// Do not edit below this line
module.exports = palindromes;
