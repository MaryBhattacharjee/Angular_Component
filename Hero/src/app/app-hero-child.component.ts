import { Component, Input } from '@angular/core'

import { Hero } from './hero'

@Component({
    selector: 'app-hero-child',
    template: `<div><h3> {{hero.name}} says: </h3>
    I , {{hero.name}}, is at your service, {{masterName}}</div>`
})

export class AppHeroChild {

    @Input() hero!: Hero;
    @Input('master') masterName = '';
}