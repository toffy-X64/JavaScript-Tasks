// 1
function randomTime() {
    return (Math.random() * 3) * 1000;
}

const loadImages = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Завантажено картинки');
        }, randomTime());
    } );
};

const loadProducts = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Завантажено продукти');
        }, randomTime());
    } );
};

const loadUsers = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Завантажено користувачів');
        }, randomTime());
    } );
};


const startLoadingButton = document.getElementById('start-loading');
startLoadingButton.onclick = (e) => {
    Promise.all([loadImages(), loadProducts(), loadUsers()])
        .then(result => console.log(result));
};