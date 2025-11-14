import { Button, RoundedButton } from "./Button.js";

document.addEventListener('DOMContentLoaded', (e) => {
    const container = document.querySelector('.container');

    const btn1 = new Button('Click me', '1px solid black', 'white', 'blue');
    btn1.render(container);

    const btn2 = new RoundedButton('Rounded 2', '1px solid black', 'black', 'green', '10px');
    btn2.render(container);
});