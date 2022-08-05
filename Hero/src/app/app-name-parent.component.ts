import { Component, Input } from '@angular/core'


@Component({
    selector: 'app-name-parent',
    template: `<h2>Master controls {{names.length}} names</h2>
    <app-name-child *ngFor = 'let name of names' [name] = "name"></app-name-child>`,
})

export class AppNameParent {
    names = ['Dr IQ', '   ', '  Bombasto  '];
}