import { User } from './user';
import { Movie } from './movie';

export class Session {
	id: number;
	date: string;
	users: User[];
	movies: Movie[];
}