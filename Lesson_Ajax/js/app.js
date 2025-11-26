// 1
async function Task_1() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.json();
    result.forEach(e => {
        console.log(e.name);
    });   
}

await Task_1();

// 2
const ul = document.querySelector('#task-2');
function Task_2() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(result => {
            result.forEach(e => {
                const li = document.createElement('li');
                li.textContent = e.title;
                ul.appendChild(li);
            });
        });
}

Task_2();

// 3
const Task_3 = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: {
            title: 'My first post',
            body: 'Hello World!',
            userId: 1
        }
    });
    const result = await response.json();
    console.log(result);
};

await Task_3();

// 4
const fetchProducts = () => {
    return new Promise((resolve, reject) => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(result => {
                resolve(result);
            })
            .catch(err => reject(err));
    });
};

const productsContainer = document.getElementById('products-container');
const renderProduct = (product) => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const title = document.createElement('h3');
    title.textContent = product.title;

    const price = document.createElement('h4');
    price.textContent = product.price;

    card.append(img, title, price);
    productsContainer.appendChild(card);
};

fetchProducts().then(products => {
    products.forEach(e => renderProduct(e));
}).catch(err => alert(err));

// Final Project - https://github.com/toffy-X64/JavaScript-Tasks/tree/main/ExamProject