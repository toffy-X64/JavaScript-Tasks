// Task 1
const urlPattern = /^(http|https|ftp):\/\/(\w+|\d+)/;

const url1 = 'https://example.com';
const url2 = 'ftp://example.com';
const url3 = 'invalid-url';

console.log(urlPattern.test(url1));
console.log(urlPattern.test(url2));
console.log(urlPattern.test(url3));

// Task 2
const getErrorMessage = (field) => {
    const validity = field.validity;

    if (validity.valueMissing)
        return 'Value Missing';

    if (validity.typeMismatch)
        return 'Type Mismatch';

    if (validity.pattentMismatch)
        return 'Invalid format';

    if (validity.tooLong) 
        return 'Too long';

    if (validity.tooShort)
        return 'Too short';

    if (validity.badInput)
        return 'Bad input';

    if (validity.rangeOverflow)
        return 'Range overflow';

    if (validity.rangeUnderflow)
        return 'Range underflow';

    if (validity.customError)
        return field.validationMessage;
};

document.addEventListener('DOMContentLoaded', (e) => {
    const modal = document.querySelector('.modal-wrapper');
    const toggleModal = () => {
        modal.classList.toggle('active');
    };

    modal.onclick = (e) => {
        if (e.target !== modal)
            return;

        toggleModal();
    };

    const closeModalButton = document.querySelector('#close-modal');
    closeModalButton.onclick = (e) => {
        toggleModal();
    };

    const openModalButton = document.getElementById('open-modal');
    openModalButton.onclick = (e) => {
        toggleModal();
    };

    const form = document.querySelector('.modal-form');
    form.onsubmit = (e) => {
        e.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        form.reset();
        toggleModal();
        console.log(form.elements);
        alert('Registration success');
    };

    const IsPlaceholderShown = (field) => {
        const id = field.id;
        return !!document.querySelector('#' + id + ':placeholder-shown');
    };

    const validateInput = (field) => {
        if (field.id === 're_password') {
            const password = form.elements.password.value;
            if (password !== field.value) {
                field.setCustomValidity('Passwords is not match');
            } else {
                field.setCustomValidity('');
            }
        }
    };

    [...form.elements].forEach(input => {
        input.oninput = (e) => {        
            validateInput(input);
            
            const errorMessage = input.parentElement.querySelector('.error-message');
            if (!input.checkValidity() && !IsPlaceholderShown(input)) {
                const message = getErrorMessage(input);
                errorMessage.textContent = message;
            } else {
                errorMessage.textContent = '';
            }
        };
    });
});