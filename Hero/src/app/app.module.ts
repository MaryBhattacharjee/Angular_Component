import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeroParent } from './app-hero-parent.component';
import { AppHeroChild } from './app-hero-child.component';
import { AppNameParent } from './app-name-parent.component';
import { AppNameChild } from './app-name-child.component';
import { VersionParentComponent } from './version-parent-component';
import { VersionChildComponent } from './version-child-component';
import { VoterComponent } from './voter.component';
import { VoteTakerComponent } from './vote-taker.component';
import { CountdownParent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { CountdownViewChildParent } from './countdown-parent-vc.component';
import { MissionControlComponent } from './missioncontrol.component';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeroParent,
    AppHeroChild,
    AppNameParent,
    AppNameChild,
    VersionParentComponent,
    VersionChildComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownParent,
    CountdownTimerComponent,
    CountdownViewChildParent,
    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
