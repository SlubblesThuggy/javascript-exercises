const palindromes = function (input) {
    input = input.replace(/[^A-z0-9]/g, "").toLowerCase();
    return input.split("").reverse().join("") == input;
};

// Do not edit below this line
module.exports = palindromes;
