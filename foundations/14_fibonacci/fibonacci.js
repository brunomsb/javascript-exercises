const fibonacci = function(a) {
    a = +a;

    if (a === 0) return 0;
    if (a < 0) return "OOPS";

    let sequence = [1, 1];
    function getNext(seq) {
        return seq[seq.length-1] + seq[seq.length-2];
    }

    for (let i = 3; i <= a; i++) {
        sequence.push(getNext(sequence));
    }

    return sequence[sequence.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
