import { Component } from '@angular/core';

import { MissionServiceService } from './mission-service.service';

@Component({
    selector: 'mission-control',
    template: `
    <h2>Mission Control</h2>
    <button (click)='announce()'>Announce Mission</button>
    <br/>
    <app-astronaut *ngFor='let astronaut of astronauts' [astro]='astronaut'></app-astronaut>
    <h3>History</h3>
    <ul>
    <li *ngFor="let event of history">{{event}}</li>
    </ul>`,

    providers: [MissionServiceService],
})

export class MissionControlComponent {
    astronauts = ['Lovell', 'Swigert', 'Haise'];
    missions = ['Fly to the moon!', 'Fly to Mars!', 'Fly to Vegas!'];
    nextMission = 0;
    history: string[] = [];

    constructor(private missionService: MissionServiceService) {
        missionService.astronautConfirmed.subscribe(astronaut => { this.history.push(`${astronaut} confirmed the mission`) })
    }

    announce() {
        const mission = this.missions[this.nextMission++];
        this.missionService.getMission(mission);
        this.history.push(`Mission '${mission}' announced`);
        if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
    }
}