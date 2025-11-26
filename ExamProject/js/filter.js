export class Filter {
    constructor(store) {
        this.store = store;
        this.searchInput = document.querySelector('.filters__search');
        this.filterCategoryDropdown = document.querySelector('#categories-dropdown');
        this.filterOrderDropdown = document.querySelector('#order-dropdown');

        this.settings = {
            search: null,
            order: null,
            category: null
        };

        this.setup();
    }

    setup() {
        this.searchInput.oninput = (e) => this.onSearchInputChange(e);
        this.filterOrderDropdown.onchange = (e) => this.onOrderDropdownChange(e);
        this.filterCategoryDropdown.onchange = (e) => this.onCategoryDropdownChange(e);
    }

    onSearchInputChange(e) {
        this.settings.search = e.target.value;
        this.applyFilter();
    }

    onOrderDropdownChange(e) {
        this.settings.order = e.target.value;
        this.applyFilter();
    }

    onCategoryDropdownChange(e) {
        this.settings.category = e.target.value;
        this.applyFilter();
    }

    applyFilter() {
        if (!this.onFilterUpdates)
            return;

        this.onFilterUpdates(this.store.getFiltered(this.settings));
    }

    setOnFilterUpdates(callback) {
        this.onFilterUpdates = callback;
    }
};