const fibonacci = function(i) {
    if (i < 0) return "OOPS";
    if (i == 0) return 0;

    let a = 0;
    let b = 1;

    for (; i > 1; i--) {
        let temp = b;
        b += a;
        a = temp;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
