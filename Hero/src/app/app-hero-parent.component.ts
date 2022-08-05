import { Component, Input } from '@angular/core'

import { Hero, HEROES } from './hero'

@Component({
    selector: 'app-hero-parent',
    template: `<h2>{{master}} controls {{heroes.length}} heroes</h2>
    <app-hero-child *ngFor = 'let hero of heroes' [hero] = "hero" [master] = "master">`,
})

export class AppHeroParent {
    master = 'Mary';
    heroes = HEROES
}