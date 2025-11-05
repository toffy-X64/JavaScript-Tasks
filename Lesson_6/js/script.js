// 1
const q1container = document.querySelector('#q1-container');
const q1btn = document.getElementById('task-1-btn');

q1btn.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    q1container.appendChild(newDiv);

    newDiv.style.backgroundColor = 'black';
    newDiv.style.padding = '50px';
    newDiv.style.borderRadius = '10px';
    newDiv.style.margin = '10px';
});

// 2
const q2Text = document.querySelector('#q2-text');
const q2Btn = document.querySelector('#q2-btn');

q2Btn.addEventListener('click', () => {
    const userInput = prompt('Enter text');
    q2Text.textContent = userInput;
});

// 3
const q3Btn = document.querySelector('#q3-btn');
const q3Wrapper = document.querySelector('#q3-wrapper');

q3Btn.addEventListener('click', () => {
    q3Wrapper.classList.toggle('hidden');
});

// 4
const shopWrapper = document.querySelector('.shop-grid');

products.forEach(element => {
    const shopItem = document.createElement('div');
    shopItem.classList.add('shop-item');

    const shopItemImg = document.createElement('img');
    shopItemImg.classList.add('shop-item-img');
    shopItemImg.setAttribute('src', element.thumbnail);

    const shopItemTitle = document.createElement('h3');
    shopItemTitle.classList.add('shop-item-title');
    shopItemTitle.textContent = element.title;

    const shopItemDescription = document.createElement('p');
    shopItemDescription.classList.add('shop-item-description');
    shopItemDescription.textContent = element.description;

    const shopItemCategory = document.createElement('div');
    shopItemCategory.classList.add('shop-item-category');
    shopItemCategory.textContent = element.category;

    const shopItemDiscount = document.createElement('div');
    shopItemDiscount.classList.add('shop-item-discount');
    shopItemDiscount.textContent = `${element.discountPercentage}%`;

    // footer
    const shopItemFooter = document.createElement('div');
    shopItemFooter.classList.add('shop-item-footer');

    const shopItemFooterPrice = document.createElement('p');
    shopItemFooterPrice.classList.add('shop-item-price');
    shopItemFooterPrice.textContent = `${element.price} $`;

    const shopItemFooterBtnBuy = document.createElement('div');
    shopItemFooterBtnBuy.classList.add('fa');
    shopItemFooterBtnBuy.classList.add('fa-shopping-cart');
    shopItemFooterBtnBuy.setAttribute('onclick', `addToCart(${element.id})`);

    shopItemFooter.appendChild(shopItemFooterPrice);
    shopItemFooter.appendChild(shopItemFooterBtnBuy);

    shopItem.appendChild(shopItemImg);
    shopItem.appendChild(shopItemTitle);
    shopItem.appendChild(shopItemDescription);
    shopItem.appendChild(shopItemCategory);
    shopItem.appendChild(shopItemDiscount);
    shopItem.appendChild(shopItemFooter);

    shopWrapper.appendChild(shopItem);
});

function addToCart(id) {
    console.log(id);
}