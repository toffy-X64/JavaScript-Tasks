const bannedCompanies = ['google', 'yandex', 'bing', 'tor'];


export const setupValidation = (form) => {
    const fields = form.querySelectorAll('.modal__input');
    fields.forEach(element => {
        element.oninput = (event) => {validateField(event.target)};
    });
};

export const getErrorMessage = (field) => {
    const validity = field.validity;

    if (validity.valueMissing) 
        return "Це поле обов'язкове";
    if (validity.typeMismatch)
        return "Це поле типу - " + field.type;
    if (validity.tooShort)
        return "Текст занадто короткий";
    if (validity.tooLong)
        return "Текст занадто довгий";
    if (validity.stepMismatch)
        return "Невалідний крок";
    if (validity.rangeUnderflow)
        return "Значення повинно бути більшим";
    if (validity.rangeOverflow)
        return "Значення повинно бути меншим";
    if (validity.patternMismatch)
        return "Значення не відповідає формату";
    if (validity.customError)
        return field.validationMessage;
    if (validity.badInput)
        return "Невалідне ЗНАЧЕННЯ";

};

export const validateField = (field) => {
    if (field.id === 'companyName') {
        const value = field.value;
        if (bannedCompanies.includes(value.toLowerCase()))
            field.setCustomValidity('Ваша компанія у списку заборонених');
        else
            field.setCustomValidity('');
    }

    const errorSpan = field.parentElement.querySelector('.error-message');
    if (!field.checkValidity()) {
        errorSpan.textContent = getErrorMessage(field);
    } else {
        errorSpan.textContent = '';
    }
};