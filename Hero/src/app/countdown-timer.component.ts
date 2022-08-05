import { Component } from '@angular/core'

@Component({
    selector: 'countdown-timer',
    template: `<div>{{msg}}</div>`
})

export class CountdownTimerComponent {
    seconds = 10;
    intervalId = 0;
    msg = '';

    StartCounter() {
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.msg = 'Blast Off!';
            } else {
                if (this.seconds < 0) { this.seconds = 10 }
                this.msg = `T-${this.seconds} seconds and counting..`
            }
        }, 1000);

    }

    StopCounter() {
        clearInterval(this.intervalId);
        this.msg = `Timer stopped at T-${this.seconds}`;
    }
}