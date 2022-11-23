/*

Структура в localStorage:

key: [
    component_1, 
    component_2, 
    ..., 
]

*/

import React from "react";

class LS {
    constructor(key) {
        this.key = key;
    }

    get() {
        return JSON.parse(localStorage.getItem(this.key)) || [];
    }

    set(component) {
        let ls = this.get();

        ls.push(component);
        localStorage.setItem(this.key, JSON.stringify(ls));
    }

    remove(component) {
        let ls = this.get();

        ls = ls.filter(lsComponent => lsComponent.props.id != component.props.id);
        localStorage.setItem(this.key, JSON.stringify(ls));
    }
}

export {
    LS, 
}