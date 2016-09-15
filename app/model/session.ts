import { User } from './user';
import { Film } from './film';

export class Session {
	id: number;
	date: string;
	users: User[];
	films: Film[];
}