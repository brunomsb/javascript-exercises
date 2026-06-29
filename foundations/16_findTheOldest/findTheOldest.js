function getAge(person) {
    const date = new Date();
    return person.yearOfDeath ?
        person.yearOfDeath - person.yearOfBirth :
        date.getFullYear() - person.yearOfBirth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        const oldestAge = getAge(oldest);
        const currentAge = getAge(current);
        
        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
