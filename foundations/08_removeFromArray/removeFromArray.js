const removeFromArray = function(array) {
    let args = Array.from(arguments);
    args.shift();
    let result = array.filter((item) => !args.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
