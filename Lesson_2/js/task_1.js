const secondsInHour = 60 * 60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;

const secondsIn = {
    hour: secondsInHour,
    day: secondsInDay,
    month: secondsInMonth
};

for (let key in secondsIn) {
    console.log(`${key} - ${secondsIn[key]} s.`);
}