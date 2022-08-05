import { Component, Input } from '@angular/core'


@Component({
    selector: 'app-name-child',
    template: `<div>{{name}}</div>`
})

export class AppNameChild {

    @Input()
    get name(): string { return this._name };
    set name(name: string) {
        this._name = (name && name.trim()) || '<no name set>';
    }

    private _name = '';
}