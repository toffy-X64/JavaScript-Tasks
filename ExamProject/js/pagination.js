export class Pagination {
    constructor(paginationClassName) {
        this.pagination = document.querySelector('.' + paginationClassName);
        this.buttonBack = document.getElementById('pagination__button-back');
        this.buttonNext = document.getElementById('pagination__button-next');

        this.currentPage = Number(localStorage.getItem('page')) || 1;
        this.perPage = 8;
        this.totalPages = 1;

        this.currentItems = [];
        this.onItemsUpdate = () => {};

        this.init();
    }

    init() {
        this.buttonBack.onclick = () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                localStorage.setItem('page', this.currentPage);
                this.update(this.currentItems);
            }
        };

        this.buttonNext.onclick = () => {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                localStorage.setItem('page', this.currentPage);
                this.update(this.currentItems);
            }
        };
    }

    onItemsUpdated(callback) {
        this.onItemsUpdate = callback;
    }

    renderPageButtons() {
        const allButtons = this.pagination.querySelectorAll('.pagination__button');
        allButtons.forEach((btn, index, all) => {
            if (index !== 0 && index !== all.length - 1) btn.remove();
        });
        this.pagination.querySelectorAll('.pagination__dots').forEach(d => d.remove());

        const insertButton = (page) => {
            const button = document.createElement('button');
            button.classList.add('pagination__button');
            if (page === this.currentPage) 
                button.classList.add('active');

            button.textContent = page;
            button.onclick = () => {
                this.currentPage = page;
                localStorage.setItem('page', page);
                this.update(this.currentItems);
            };
            this.pagination.insertBefore(button, this.pagination.lastElementChild);
        };

        const insertDots = () => {
            const dots = document.createElement('span');
            dots.textContent = "…";
            dots.classList.add("pagination__dots");
            this.pagination.insertBefore(dots, this.pagination.lastElementChild);
        };

        const current = this.currentPage;
        if (this.totalPages <= 7) {
            for (let i = 1; i <= this.totalPages; i++) 
                insertButton(i);
            return;
        }

        insertButton(1);
        if (current > 4) 
            insertDots();

        for (let i = current - 2; i < current; i++) {
            if (i > 1) 
                insertButton(i);
        }

        if (current !== 1 && current !== this.totalPages) 
            insertButton(current);

        for (let i = current + 1; i <= current + 2; i++) {
            if (i < this.totalPages) 
                insertButton(i);
        }

        insertButton(this.totalPages);
    }

    update(items) {
        this.currentItems = items;

        this.totalPages = Math.ceil(items.length / this.perPage);
        if (this.currentPage > this.totalPages) this.currentPage = 1;

        this.renderPageButtons();
        this.onItemsUpdate(this.getItems());
    }

    getItems() {
        const startIndex = (this.currentPage - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;

        return this.currentItems.slice(startIndex, endIndex);
    }
}