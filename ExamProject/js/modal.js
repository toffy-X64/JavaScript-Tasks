export class Modal
{
    constructor(modalId, sourceId, closeId)
    {
        this.modal = document.getElementById(modalId);
        this.form = this.modal.querySelector('.modal__form');

        this.initModal();

        if (sourceId)
            this.addSource(sourceId);

        if (closeId)
            this.addCloseSource(closeId);

        this.onSendCallback = null;
    }

    setOnSendCallback(cb) {
        this.onSendCallback = cb;
        this.form.addEventListener('submit', this.onSendCallback);
    }

    initModal()
    {
        this.modal.addEventListener('click', (e) => {
            if (e.target !== this.modal)
                return;

            this.#toggle();
        });
    }

    setItem(item) {
        const titleInput = document.getElementById('title');
        titleInput.value = item.title;

        const categorySelect = document.getElementById('category');
        categorySelect.value = item.category.toLowerCase();

        const salaryInput = document.getElementById('salary');
        salaryInput.value = item.salary;

        const companyNameInput = document.getElementById('companyName');
        companyNameInput.value = item.companyName;

        const locationInput = document.getElementById('location');
        locationInput.value = item.location;

        const companyLogoInput = document.getElementById('companyLogo');
        companyLogoInput.value = item.companyLogo;

        const idInput = document.getElementById('id');
        idInput.value = item.id;
    }

    #toggle()
    {
        this.modal.classList.toggle('active');
    }

    addSource(sourceId)
    {
        this.source = document.getElementById(sourceId);
        this.source.onclick = (e) => {
            this.#toggle();
        };
    }

    addCloseSource(closeId)
    {
        this.close = document.getElementById(closeId);
        this.close.onclick = (e) => {
            this.#toggle();
        };
    }

    PublicToggle()
    {
        this.#toggle();
    }

    PublicClose() {
        this.modal.classList.remove('active');
    }

    resetForm()
    {
        this.form.reset();
    }
};
