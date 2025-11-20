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
};