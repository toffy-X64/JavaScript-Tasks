export class Storage
{
    add(item) {
        const newItem = {
            ...item
        };
        newItem.id = crypto.randomUUID();
        
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
    }

    update(id, newItem) {
        const item = {
            ...newItem
        }
        item.id = id;

        const allItems = this.getAll();
        const newItems = allItems.map(e => {
            if (e.id === id)
                return item;

            return e;
        });
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    delete(id) {
        const allItems = this.getAll();
        const newItems = allItems.filter(e => e.id !== id);
        localStorage.setItem('items', JSON.stringify(newItems));
    }
    
    getAll() {
        return JSON.parse(localStorage.getItem('items'));
    }
    
    getPage(perPage, pageNumber) {
        const allItems = this.getAll();

        const startIndex = perPage * (pageNumber - 1);
        const endIndex = startIndex + perPage;

        return allItems.slice(startIndex, endIndex);
    }

    getById(id) {
        const items = JSON.parse(localStorage.getItem('items'));
        return items.find(item => item.id === id);
    }

    getByContent(content) {
        const allItems = this.getAll() || [];
        const query = content.toLowerCase();

        return allItems.filter(item => {
            const name = (item.title || "").toLowerCase();
            const company = (item.companyName || "").toLowerCase();

            return name.includes(query) || company.includes(query);
        });
    }

    getFiltered(settings) {
        let items = this.getAll() || [];

        if (settings.search && settings.search.trim() !== "") {
            items = this.getByContent(settings.search);
        }

        if (settings.category && settings.category.trim() !== "") {
            const cat = settings.category.toLowerCase().trim();
            items = items.filter(item => {
                const itemCat = (item.category || "").toLowerCase().trim();
                return itemCat === cat;
            });
        }

        if (settings.order) {
            switch (settings.order) {
                case "newest":
                    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    break;
                case "oldest":
                    items.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                    break;
                case "esc":
                    items.sort((a, b) => (a.salary || 0) - (b.salary || 0));
                    break;
                case "desc":
                    items.sort((a, b) => (b.salary || 0) - (a.salary || 0));
                    break;
            }
        }

        return items;
    }
};