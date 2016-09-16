import { Component } from '@angular/core';
import { Session } from './model/session';
import { VoteComponent } from './vote.component';
import { USERS } from './model/user.fixtures';
import { MOVIES } from './model/movie.fixtures';

@Component({
  selector: 'my-app',
  templateUrl: 'app/partials/main.html'
})
export class AppComponent
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
}
