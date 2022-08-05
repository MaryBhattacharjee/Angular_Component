import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core'


@Component({
    selector: 'version-child',
    template: `<h2>Version is: {{major}}:{{minor}}</h2>
    <h3>Change Log:</h3>
    <ul>
    <li *ngFor='let change of changeLog'>{{change}}</li>
    </ul>`
})

export class VersionChildComponent {

    @Input() major = 0;
    @Input() minor = 0;
    changeLog: string[] = [];

    ngOnChanges(changes: SimpleChanges) {
        const log: string[] = [];
        for (const propName in changes) {
            const changedProp = changes[propName];
            if (changedProp.isFirstChange()) {
                log.push(`Initial value of ${propName} set to ${changedProp.currentValue}`);
            } else {
                log.push(`Value of ${propName} changed from ${changedProp.previousValue} to ${changedProp.currentValue}`)
            }
        }
        this.changeLog.push(log.join(', '));

    }
}