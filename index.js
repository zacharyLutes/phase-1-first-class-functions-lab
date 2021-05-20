const returnFirstTwoDrivers = arrayOfDrivers => {
    const firstTwoDrivers = [arrayOfDrivers[0], arrayOfDrivers[1]];
    return firstTwoDrivers;
}

const returnLastTwoDrivers = arrayOfDrivers => {
    const lastTwoDrivers = [arrayOfDrivers[arrayOfDrivers.length-2], arrayOfDrivers[arrayOfDrivers.length-1]];
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = operand => {
    return (input) => input * operand;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, func) => func(arrayOfDrivers);