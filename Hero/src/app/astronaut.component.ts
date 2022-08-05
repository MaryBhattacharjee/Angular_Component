import { Component, Input } from '@angular/core'
import { MissionServiceService } from './mission-service.service';
import { Subscription } from 'rxjs';
@Component({
    selector: 'app-astronaut',
    template: `{{astro}}:{{mission}}
    <button (click)='confirm()' [disabled]="!announced || confirmed">Confirm</button>`
})

export class AstronautComponent {

    @Input() astro = '';
    mission = '<no Mission announced>';
    announced = false;
    confirmed = false;
    subscription: Subscription;

    constructor(private missionService: MissionServiceService) {
        this.subscription = missionService.missionAnnounced.subscribe(mission => { this.mission = mission, this.announced = true });
    }

    confirm() {
        this.confirmed = true;
        this.missionService.getAstronaut(this.astro);
    }
}