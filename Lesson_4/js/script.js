// 1
const findUnique = (arr) => {
    let tempArr = [];

    arr.forEach(element => {
        if (!tempArr.includes(element))
            tempArr.push(element);
    })

    return tempArr.length === arr.length;
};

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));

// 2
let shoppingList = [];
const list = {
    listStorage: undefined,

    setStorage(list) {
        this.listStorage = list;
    },

    print() {
        const sortedArr = this.listStorage.toSorted( (a,b) => a.purchased - b.purchased );
        sortedArr.forEach(element => 
            console.log(`Name - ${element.name}\nQuantity - ${element.quantity}\nPurchased - ${element.purchased}`)
        );
    },

    add(name, quantity) {
        const existing = this.listStorage.find(item => item.name === name);

        if (existing) {
            existing.quantity += quantity;
            return;
        }

        this.listStorage.push({
            name,
            quantity,
            purchased: false
        });
    },

    purchase(name) {
        const existing = this.listStorage.find(item => item.name === name);
        if (!existing)
            return;

        existing.purchased = true;
    }
};

list.setStorage(shoppingList);
list.print();
list.add('Iphone 15 Pro', 1);
list.add('Iphone 17 Pro', 1);
list.add('Iphone 15 Pro', 1);
list.purchase('Iphone 15 Pro');
list.print();

// 3
let products = [
    {name: "Phone", price: 500, category: "Electronics"},
    {name: "Laptop", price: 1000, category: "Electronics"},
    {name: "Book", price: 20, category: "Books"},
    {name: "Shoes", price: 80, category: "Fashion"}
];

const category = prompt('Enter category:');
const filteredArr = products.filter( item => item.category == category );
console.log(filteredArr);

// 4
let students = [
    {name: "John", grades: {math: 90, english: 85, science: 95}},
    {name: "Alice", grades: {math: 95, english: 88, science: 92}},
    {name: "Bob", grades: {math: 80, english: 75, science: 85}}
];

for(const student of students) {
    const grades = Object.values(student.grades);
    let totalGrade = 0;
    grades.forEach(e => totalGrade += e);

    const avgGrade = Math.round(totalGrade / grades.length);
    console.log(`Student - ${student.name}, Avg-grade - ${avgGrade}`);
}