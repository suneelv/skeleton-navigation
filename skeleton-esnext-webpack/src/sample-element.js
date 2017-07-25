import {customElement, bindable} from 'aurelia-framework';

@customElement('sample-element')
export class SampleElement {

    @bindable item;

    bind(){
        console.log("bound");
    }

    unbind(){
        console.log("unbound");
    }
}