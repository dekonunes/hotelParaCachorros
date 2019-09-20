import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    constructor() { }

    removeClassGrey(icon) {
        icon.classList.remove('grey-color');
    }

    addClassGrey(icon) {
        icon.classList.add('grey-color');
    }

}
