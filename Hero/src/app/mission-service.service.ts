import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class MissionServiceService {

  private announcedMission = new Subject<string>();
  private confirmedAstronaut = new Subject<string>();

  missionAnnounced = this.announcedMission.asObservable();
  astronautConfirmed = this.confirmedAstronaut.asObservable();

  getMission(mission: string) {
    this.announcedMission.next(mission);
  }

  getAstronaut(astronaut: string) {
    this.confirmedAstronaut.next(astronaut);
  }
}
