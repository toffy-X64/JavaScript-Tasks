export class Vacancy {
    constructor(itemData) {
        const { id, title, companyLogo, salary, category, companyName, location } = itemData;

        this.id = id;
        this.title = title;
        this.companyLogo = companyLogo;
        this.salary = salary;
        this.category = category;
        this.companyName = companyName;
        this.location = location;
    }

    createElement(callback) {
        const cardBody = document.createElement('div');
        cardBody.classList.add('vacancy-card');

        const companyLogo = document.createElement('img');
        companyLogo.classList.add('vacancy-card__logo');
        companyLogo.setAttribute('src', this.companyLogo);
        companyLogo.setAttribute('alt', 'CompanyLogo');

        const title = document.createElement('p');
        title.classList.add('vacancy-card__title');
        title.textContent = this.title;

        const salary = document.createElement('p');
        salary.classList.add('vacancy-card__salary');
        salary.textContent = `$` + this.salary;

        const category = document.createElement('p');
        category.classList.add('vacancy-card__category');
        category.textContent = this.category;

        const companyInfoContainer = document.createElement('div');
        companyInfoContainer.classList.add('vacancy-card__company-info');

        const companyName = document.createElement('p');
        companyName.classList.add('vacancy-card__company');
        companyName.textContent = this.companyName;

        const location = document.createElement('p');
        location.classList.add('vacancy-card__company-location');
        location.textContent = this.location;

        companyInfoContainer.append(companyName, location);

        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('vacancy-card__actions');

        const btnEdit = document.createElement('button');
        btnEdit.classList.add('vacancy-card__btn', 'edit');
        btnEdit.textContent = 'Редагувати';

        const btnDelete = document.createElement('button');
        btnDelete.classList.add('vacancy-card__btn', 'delete');
        btnDelete.id = 'delete-vacancy-button';
        btnDelete.textContent = 'Видалити';

        btnEdit.onclick = (e) => callback(this.id, 'edit');

        btnDelete.onclick = (e) => callback(this.id, 'delete');

        actionsContainer.append(btnEdit, btnDelete);
        cardBody.append(companyLogo, title, salary, category, companyInfoContainer, actionsContainer);

        return cardBody;
    }
};