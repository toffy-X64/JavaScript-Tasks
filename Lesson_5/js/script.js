// 1
const nums = [1, 5, 7, 8, 3, 9, 11, 21, 17, 18, 19];

console.log(Math.min(...nums));
console.log(Math.max(...nums));

// 2
const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt( Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) )
};

console.log(getDistance(3, 4, 7, 1));

// 3
const userDate = prompt('Enter date YYYY-MM-DD: ');
const date = new Date(userDate);

if (date)
    console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);

// 4
const allowedLength = 20;
const validateString = (str) => {
    if (str.length >= allowedLength) {
        return str.slice(0, allowedLength - 1 - 3) + '...';
    }

    return str;
}

console.log(validateString('Це дуже довгий рядок, який потрібно обрізати.'));

// 5
const uInput = prompt('Enter string: ');

const cutSpaces = (str) => {
    return str.trim().split(' ').filter(e => e).join(' ');
};

console.log(cutSpaces(uInput || 'Test test test'));

// 6
const convertStyleName = (style) => {
    const arr = style.split('-');

    let skipFirst = false;
    const formatedArr = arr.map(e => {
        if (!skipFirst) {
            skipFirst = true;
            return e;
        }

        const tempArr = Array.from(e);
        tempArr[0] = tempArr.at(0).toUpperCase();

        return tempArr.join('');
    });

    return formatedArr.join('');
};

console.log(convertStyleName('font-size'));
console.log(convertStyleName('border-left-color'));

// 7
const toUpperEarchWord = (str) => {
    let arr = str.split(' ');

    const newArr = arr.map(e => {
        const wordArr = Array.from(e);
        wordArr[0] = wordArr.at(0).toUpperCase();

        return wordArr.join('');
    });

    return newArr.join(' ');
};

console.log(toUpperEarchWord('i love java script'));

// 8
function makeCount() {
    const currentDate = new Date();
    const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

    const difference = newYearDate - currentDate;

    const countdownDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const countdownHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const countdownMinutes = Math.floor((difference / (1000 * 60)) % 60);
    const countdownSeconds = Math.floor((difference / 1000) % 60);


    document.getElementById('days').textContent = String(countdownDays).padStart(2, "0");;
    document.getElementById('hours').textContent = String(countdownHours).padStart(2, "0");
    document.getElementById('minutes').textContent = String(countdownMinutes).padStart(2, "0");;
    document.getElementById('seconds').textContent = String(countdownSeconds).padStart(2, "0");;
}

setInterval(makeCount, 1000);