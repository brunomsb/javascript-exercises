const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
    if (a !== Math.floor(a) || b !== Math.floor(b)) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';

    let lowerBound = a <= b ? a : b;
    let upperBound = a <= b ? b : a;
    
    let sum = 0;
    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
