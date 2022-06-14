// Code your solution here
function findMatching (drivers, string){
    return drivers.filter((result) => result.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string){
    return drivers.filter(result => result[0] === string[0]);

}

function matchName(drivers, string){
    return drivers.filter(record => record.name === string);

}