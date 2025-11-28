import { Modal } from './modal.js';
import { Storage } from './storage.js';
import { Vacancy } from './vacancy.js';
import { Filter } from './filter.js';
import { setupValidation } from './validation.js';
import { Pagination } from './pagination.js';
import { addMockItems } from './mock.js';

function renderVacancies(items, callback)
{
    const vacanciesSection = document.getElementById('vacancies-section');
    destroyAllVacancies();

    if (items.length === 0 || ( !Array.isArray(items) && Object.keys(items).length === 0 ) ) {
        const h2 = document.createElement('h2');
        h2.textContent = 'Vacancies not found!';

        vacanciesSection.appendChild(h2);
        return;
    }

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
    const filter = new Filter(store);
    const pagination = new Pagination('pagination');

    const deleteModal = new Modal('deleteModal', null, 'delete-modal-btn-close');

    const Render = (vacancies) => {
        renderVacancies(vacancies, (sourceId, action) => {
            switch(action)
            {
                case 'edit':
                    const item = store.getById(sourceId);
                    modal.setItem(item);
                    modal.PublicToggle();
                    break;
                case 'delete':
                    deleteModal.PublicToggle();
                    deleteModal.setOnSendCallback((e) => {
                        e.preventDefault();
                        const btnYes = document.getElementById('btn-yes');
                        deleteModal.PublicClose();
                        if (e.submitter == btnYes) {
                            store.delete(sourceId);
                            pagination.update(store.getAll());
                        }
                    });
                    break;
            }
        });
        
    };

    const AddOrUpdateItem = (e) => {
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
            pagination.update(store.getAll());
            modal.resetForm();
            modal.PublicToggle();
        }
    };

    modal.setOnSendCallback( (e) => {
        e.preventDefault();
        AddOrUpdateItem(e);
    } );


    filter.setOnFilterUpdates( (vacancies) => {
        pagination.currentPage = 1;
        pagination.update(vacancies);
    } );

    pagination.onItemsUpdated( (vacancies) => {
        Render(vacancies);
    } );

    //addMockItems(store);
    setupValidation(modal.form);
    pagination.update(store.getAll());
}
document.addEventListener('DOMContentLoaded', app);