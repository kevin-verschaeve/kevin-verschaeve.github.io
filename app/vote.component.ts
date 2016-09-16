import { Component, Input } from '@angular/core';
import { User } from './model/user';
import { Movie } from './model/movie';

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
	movies: Movie[];

	hasVoted(movie) {
		return movie.voters.indexOf(this.voter) > -1;
	}
}
