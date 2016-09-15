import { Component, Input } from '@angular/core';
import { User } from './model/user';
import { Film } from './model/film';

@Component({
  selector: 'vote',
  templateUrl: 'app/partials/vote.html',
  styles: [`
  	.vote-on {
  		background: green;
  	}
  	.vote-off {
  		background: red;
  	}
  `]
})
export class VoteComponent {
	@Input()
	voter: User;

	@Input()
	films: Film;

	hasVoted(film) {
		return film.voters.indexOf(this.voter) > -1;
	}
}
