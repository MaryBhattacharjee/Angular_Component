import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'voter-comp',
    template: `<h3>{{name}}</h3>
    <button (click)='voted(true)' [disabled]='didVote'>Agreed</button>
    <button (click)='voted(false)' [disabled]='didVote'>Disagreed</button>`
})

export class VoterComponent {
    @Input() name = '';
    @Output() vote = new EventEmitter<boolean>();
    didVote = false;

    voted(agreed: any) {
        this.didVote = true;
        this.vote.emit(agreed);
    }
}