const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function getDayName(dateString) {
    let dayName = dayNames[new Date(dateString).getDay()];
    return dayName;
}

const dateString = '10/11/2009';
console.log(getDayName(dateString));
