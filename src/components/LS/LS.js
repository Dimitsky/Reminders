/*

Структура в localStorage:

key: [
    {
        id, 
        value, 
    }, 
    {
        id, 
        value, 
    }, 
    ...
]

*/

class LS {
    constructor(key) {
        this.key = key;
    }

    get() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    set(data) {
        let ls = this.get();

        ls.push(data);
        localStorage.setItem(this.key, JSON.stringify(ls));
    }

    remove(id) {
        let ls = this.get();

        ls = ls.filter(data => data.id != id);
        localStorage.setItem(this.key, JSON.stringify(ls));
    }

    update(id, value) {
        let ls = this.get();
        let data = ls.find(data => data.id === id);

        if (data) {
            data.value = value;
        }

        localStorage.setItem(this.key, JSON.stringify(ls));
    }
}

export {
    LS, 
}