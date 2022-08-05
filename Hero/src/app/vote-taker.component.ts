import { Component } from '@angular/core';

@Component({
    selector: 'vote-taker-comp',
    template: `<h2>Should Mankind colonize the earth</h2>
    Agree: {{agreed}},   Disagree: {{disagreed}}  
    <voter-comp *ngFor='let vname of names' [name]='vname' (vote)='onVote($event)'></voter-comp>`
})

export class VoteTakerComponent {
    agreed = 0;
    disagreed = 0;
    names = ['SuperMan', 'SpiderMan', 'IronMan'];

    onVote(result: boolean) {
        result ? this.agreed++ : this.disagreed++;
    }
}