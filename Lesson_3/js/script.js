// 1
function compareNumbers(n1, n2) {
    if (n1 < n2) 
        return -1;
    if (n1 > n2) 
        return 1;

    return 0;
}

// 2
function calcRectangleArea(a, b = 0) {
    return b === 0 ? a * a : a * b;
}

// 3
function connectNumbers(n1, n2, n3) {
    return `${n1}${n2}${n3}`
}

// 4
function calcSumOfNumbers(num) {
    const sNum = String(num);
    let sum = 0;

    for(let char of sNum) {
        sum += Number(char);
    }

    return sum;
}

// console.log( calcSumOfNumbers(5) );

// 5
function calculate(a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return -1;
    }
}

// 6
function calcAvg(...numbers) {
    let sum = 0;
    for(let num of numbers)
        sum += num;

    return sum / numbers.length;
}

// console.log( calcAvg(4, 6, 8) );

// 7
function isEven(number) {
    return number % 2 == 0;
}

// console.log(isEven(4));
// console.log(isEven(7));

// 8
function sumTo(num, ident = 1, sum = 0) {    
    if (ident <= num)
        return sumTo(num, ident + 1, sum + ident);
    
    return sum;
}

// console.log(sumTo(5));

// 9
function repeatString(str, times) {
    return str.repeat(times);
}

// console.log(repeatString('Hi! ', 3));

// 10
function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0)
        return false;

    return a + b > c && a + c > b && b + c > a;
}

// console.log(isTriangle(2, 3, 4));
// console.log(isTriangle(1, 2, 3));