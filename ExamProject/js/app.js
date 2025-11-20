import { Modal } from './modal.js';
import { Storage } from './storage.js';
import { Vacancy } from './vacancy.js';

function renderVacancies(items, callback)
{
    const vacanciesSection = document.getElementById('vacancies-section');

    items.map(v => {
        const vacancy = new Vacancy(v);
        const vacancyCard = vacancy.createElement(callback);
        vacanciesSection.appendChild(vacancyCard);
    });
}

function destroyAllVacancies()
{
    const vacanciesSection = document.getElementById('vacancies-section');
    vacanciesSection.replaceChildren();
}

function app() {
    const modal = new Modal('vacancyModal', 'open-vacancy-modal', 'vacancy-modal-close');
    const store = new Storage();

    const makeFetchAndRender = () => {
        renderVacancies(store.getAll(), (sourceId, action) => {
            switch(action)
            {
                case 'edit':
                    const item = store.getById(sourceId);
                    modal.setItem(item);
                    modal.PublicToggle();
                    break;
                case 'delete':
                    store.delete(sourceId);

                    destroyAllVacancies();
                    makeFetchAndRender();
                    break;
            }
        });
    };

    modal.setOnSendCallback( (e) => {
        e.preventDefault();

        try {
            const item = {};
                
            [...e.target.elements].forEach(element => {
                item[element.id] = element.value;
            });

            const { id } = e.target.elements;
            if (!id || !id.value) {
                store.add(item);
            }
            else {
                store.update(id.value, item);
            }
        }
        catch(err) {
            alert(err);
        }
        finally {   
            destroyAllVacancies();
            makeFetchAndRender();

            modal.resetForm();
            modal.PublicToggle();
        }
    } );

    makeFetchAndRender();
}
document.addEventListener('DOMContentLoaded', app);