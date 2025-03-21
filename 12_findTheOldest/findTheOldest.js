function getAge(yob, yod) {
    if (!yod) {
        yod = 2024;
    }
    return yod - yob;
}
const findTheOldest = function (people) {
    return people.reduce((oldest, cur_person) => {
        const old_age = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const cur_age = getAge(cur_person.yearOfBirth, cur_person.yearOfDeath);
        if (old_age < cur_age) {
            oldest = cur_person;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
