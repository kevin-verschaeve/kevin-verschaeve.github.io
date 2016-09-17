import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  templateUrl: 'app/partials/register.html'
})
export class RegisterComponent {
	public user: User = new User(null, '', '', '');

	public onSubmit() {
		console.log(this.user)
	}
}
