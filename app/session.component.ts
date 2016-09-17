import { Component } from '@angular/core';
import { Session } from './model/session';
import { USERS } from './model/user.fixtures';
import { MOVIES } from './model/movie.fixtures';

@Component({
  selector: 'my-app',
  templateUrl: 'app/partials/session.html'
})
export class SessionComponent
{
	public session: Session;

	constructor() {
		this.session = {
			id: 123,
			date: '15/09/2016',
			users: USERS,
			movies: MOVIES
		}
	}

	hasVoted(voter, movie) {
		return movie.voters.indexOf(voter) > -1;
	}
}
