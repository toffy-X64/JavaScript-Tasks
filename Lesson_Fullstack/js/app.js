document.addEventListener('DOMContentLoaded', (e) => {
    const searchInput = document.querySelector('.search__input');
    const productsContainer = document.querySelector('#products-container');

    const loadItems = async() => {
        const response = await fetch('https://dummyjson.com/products?limit=100&skip=0');
        const result = await response.json();
        return result.products;
    };

    const renderItems = (items) => {
        productsContainer.innerHTML = '';
        console.log(items);
        
        if (items.length === 0 || !Array.isArray(items)) {
            const errorMessage = document.createElement('h1');
            errorMessage.textContent = 'Products not found!';
            productsContainer.appendChild(errorMessage);
            return;
        }

        items.forEach(e => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.setAttribute('src', e.thumbnail);

            const title = document.createElement('h2');
            title.textContent = e.title;

            const desc = document.createElement('p');
            desc.textContent = e.description;

            const price = document.createElement('p');
            price.textContent = '$' + e.price;

            card.append(image, title, desc, price);
            productsContainer.appendChild(card);
        });
    };

    const applyFilter = async() => {
        const query = searchInput.value.trim();
        let products = await loadItems();
        if (!query || query === '') {
            return products;
        }
            
        products = products.filter(item => {
            return item.title.includes(query) || item.description.includes(query);
        });
        return products;
    };

    const onInput = () => {
        applyFilter()
            .then(items => renderItems(items))
            .catch(err => alert(err));
    };
    searchInput.oninput = () => onInput();
});