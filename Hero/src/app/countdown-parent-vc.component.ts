import { Component, ViewChild, AfterViewInit } from '@angular/core'

import { CountdownTimerComponent } from './countdown-timer.component'

@Component({
    selector: 'countdown-parent-vc',
    template: `<h2>Countdown to Liftoff</h2>
    <button (click)='Start()'>Start</button>
    <button (click)='Stop()'>Stop</button>
    <p>{{seconds()}}</p>
    <countdown-timer></countdown-timer>`
})

export class CountdownViewChildParent {
    @ViewChild(CountdownTimerComponent)
    private timer!: CountdownTimerComponent;

    seconds() {
        return 0;
    }

    ngAfterViewInit() {
        setTimeout(() => this.seconds = () => this.timer.seconds, 0)
    }

    Start() {
        this.timer.StartCounter();
    }

    Stop() {
        this.timer.StopCounter();
    }
}