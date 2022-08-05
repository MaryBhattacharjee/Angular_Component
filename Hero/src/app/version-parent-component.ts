import { Component } from '@angular/core';

@Component({
    selector: 'version-parent-component',
    template: `<h1>Source Control Version</h1>
    <button (click)="newMajor()">New Major Version</button>
    <button (click)="newMinor()">New Minor Version</button>
    <version-child [major] = "majorV" [minor] = "minorV"></version-child>`
})

export class VersionParentComponent {

    majorV = 0;
    minorV = 0;

    newMajor() {
        this.majorV++;
        this.minorV = 0;
    }

    newMinor() {
        this.minorV++;
    }
}