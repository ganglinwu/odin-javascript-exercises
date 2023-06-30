var todayDate = new Date;
var currentYear = todayDate.getFullYear()

const findTheOldest = function(people) {
    const sortedByOldest = people.sort((person1, person2)=> {
        if (!person1.yearOfDeath) {
            person1.yearOfDeath = currentYear;
        }
        if (!person2.yearOfDeath) {
            person2.yearOfDeath = currentYear;
        }
        age1 = person1.yearOfDeath - person1.yearOfBirth;
        age2 = person2.yearOfDeath - person2.yearOfBirth;
        return age1 > age2 ? -1 : 1;
    })
    return sortedByOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
