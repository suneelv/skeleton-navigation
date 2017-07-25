import { customElement } from 'aurelia-framework';

@customElement('element-container')
export class ElementContainer {

    constructor() {
        this.data = [];
    }
    bind() {
        this.data = [1, 2, 3];
    }

    removeElement() {
        this.data = this.data.filter(item => item !== 1);
    }

    reset() {
        this.data = [1, 2, 3];
    }

    matcher(oldItem, newItem) {
        console.log("matcher called");
        return oldItem === newItem;
    }
}