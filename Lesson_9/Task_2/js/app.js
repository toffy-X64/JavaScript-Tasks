const toggleModal = () => {
    const modal = document.querySelector('.modal-wrapper');
    modal.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', (e) => {
    const openModalBtn = document.querySelector('#modal-open-btn');
    const closeModalBtn = document.querySelector('.modal-close-btn');

    openModalBtn.addEventListener('click', (e) => toggleModal());
    closeModalBtn.addEventListener('click', (e) => toggleModal());

    const modal = document.querySelector('.modal-wrapper');
    modal.addEventListener('click', (e) => {
        if (e.target !== modal)
            return;

        toggleModal();
    });

    const products = [];

    const modalForm = document.querySelector('#modal-form');
    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const {
            title: { value: title },
            description: { value: description },
            price: { value: price },
            discount: { value: discount },
            in_stock: { value: in_stock },
            brand: { value: brand }
        } = e.target.elements;

        if (price < 0) {
            alert('Price cannot be negative');
            return;
        }

        if (discount < 0) {
            alert('discount cannot be negative');
            return;
        }

        if (in_stock < 0) {
            alert('in_stock cannot be negative');
            return;
        }

        products.push({
            title,
            description,
            price,
            discount,
            in_stock,
            brand
        });
        modalForm.reset();

        toggleModal();
        console.log(products);
        alert('Prouct successfully added!');
    });
});