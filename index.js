// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(value) {
    
    return function(){
        return value * 5
    }
}
const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

function fareDoubler(value) {
    
    return value * 2
    
}
function fareTripler(value) {
    return value * 3
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
}