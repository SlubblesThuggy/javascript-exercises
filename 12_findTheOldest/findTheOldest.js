const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        return (getAge(current) > getAge(oldest)) ? current : oldest;
    });
};

function getAge(person) {
    if (person == undefined) return -1;
    return ("yearOfDeath" in person ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
