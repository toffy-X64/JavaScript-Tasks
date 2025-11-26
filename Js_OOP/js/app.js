
// 1
document.addEventListener('DOMContentLoaded', (e) => {
    const mainButton = document.getElementById('main-button');
    const infoContainer = document.querySelector('.info-container');

    const writeLog = (text) => {
        const p = document.createElement('p');
        p.textContent = text;

        infoContainer.appendChild(p);
    };

    const getRandomRgbComponent = () => Math.floor(Math.random() * 255);
    const getRandomColor = () => {
        return `rgb(${getRandomRgbComponent()}, ${getRandomRgbComponent()}, ${getRandomRgbComponent()})`;
    };

    const eventHandler = (e) => {
        if (e.type === 'contextmenu')
            e.preventDefault();

        if (e.type === 'dblclick' && e.target === mainButton) {
            mainButton.style.backgroundColor = getRandomColor();
        }

        console.log(e);

        let result = ``;

        result += `Event: ${e.type}\n`;

        if (!e.key)
            result += `Target: ${e.target.tagName}\n`

        if (e.clientX && e.clientY) {
            result += `X = ${e.clientX}, Y = ${e.clientY}\n`;
        }

        if (e.key) {
            result += `Key: ${e.key}\n`;
        }

        result += `Time: ${new Date().toLocaleTimeString()}`;
        writeLog(result);
    };

    const events = ['click', 'dblclick', 'contextmenu', 'keydown'];
    events.forEach(eventName => {
        document.addEventListener(eventName, eventHandler);
    });
});

// 2
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;

    this.displayInfo = function() {
        console.log(`Brand: ${this.brand}\nModel: ${this.model}\nYear: ${this.year}`);
    }

    this.drive = function() {
        console.log('Ruh Rozpochato');
    }
}

const cars = [
    { brand: 'BMW', model: 'i8', year: 2021 },
    { brand: 'Mercedes', model: 'G55', year: 2025 },
    { brand: 'Audi', model: 'A8', year: 2022 },
];

let carsInstances = [];

cars.forEach(e => {
    const vehicle = new Car(e.brand, e.model, e.year);
    carsInstances.push(vehicle);
});

carsInstances.forEach(car => {
    car.displayInfo();
    car.drive();
});

// 3
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    study() {
        console.log(`Student: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
};

const students = [
    {name: 'Igor Molor', age: 17, grade: 12},
    {name: 'Ivan Molor', age: 18, grade: 5},
    {name: 'Taras Molor', age: 16, grade: 8},
];

const studentsInstances = [];

students.forEach(e => {
    studentsInstances.push(new Student(e.name, e.age, e.grade));
});

studentsInstances.forEach(s => {
    s.study();
});

// 4
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    displayInfo() {
        console.log(`Book: ${this.title}\nAuthor: ${this.author}\nYear: ${this.year}`);
    }
};

const books = [
    {title: 'Igor Molot Story', author: 'Igor Molot', year: 2025},
    {title: 'Bitcoin', author: 'Igor Molot', year: 2023},
    {title: 'Xrp for beginners', author: 'Igor Molot', year: 2022},
];
const booksInstances = [];

books.forEach(e => {
    booksInstances.push(new Book(e.title, e.author, e.year));
});

booksInstances.forEach(book => {
    book.displayInfo();
});

// 5
class Shape {
    constructor(color) {
        this.color = color;
    }

    getArea() {
        if (typeof(this) === Shape) {
            console.log('This method is not avaliable for parent class');
            return -1;
        } 
    }

    displayInfo() {
        if (typeof(this) === Shape) {
            console.log('This method is not avaliable for parent class');
        }
    }
};

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    displayInfo() {
        console.log(`Area: ${this.getArea()}\nColor: ${this.color}`);
    }
}

class Rectangle extends Shape {
    constructor(color, sizeA, sizeB) {
        super(color);
        this.sizeA = sizeA;
        this.sizeB = sizeB;
    }

    getArea() {
        return this.sizeA * this.sizeB;
    }

    displayInfo() {
        console.log(`Area: ${this.getArea()}\nColor: ${this.color}`);
    }
}

const rect = new Rectangle('red', 10, 5);
const circle = new Circle('blue', 8);

rect.displayInfo();
circle.displayInfo();