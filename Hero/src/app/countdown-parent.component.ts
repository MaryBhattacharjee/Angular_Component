import { Component } from '@angular/core'

import { CountdownTimerComponent } from './countdown-timer.component'

@Component({
    selector: 'countdown-parent',
    template: `<h2>Countdown to Liftoff</h2>
    <button (click)='timer.StartCounter()'>Start</button>
    <button (click)='timer.StopCounter()'>Stop</button>
    <p>{{timer.seconds}}</p>
    <countdown-timer #timer></countdown-timer>`
})

export class CountdownParent {

}