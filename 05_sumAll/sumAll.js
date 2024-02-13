const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0) { // args must be positive integers
        return "ERROR";
    }

    if (end < start) { // swap so that start < end
        const tmp = start;
        start = end;
        end = tmp;
    }

    let sum = end; // add the end first
    for (let i = start; i < end; i++) { // then add everything else in order
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
