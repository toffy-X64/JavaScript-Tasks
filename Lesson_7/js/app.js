import { renderCards } from './cards.js';
import { burgerButtonHandler } from './burger.js';

document.addEventListener('DOMContentLoaded', () => {
    renderCards(5);
});

const burgetBtn = document.querySelector('.burger__button');
burgetBtn.onclick = burgerButtonHandler;