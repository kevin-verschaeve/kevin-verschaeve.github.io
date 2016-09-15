import { User } from './user';

export class Film {
	id: number;
	name: string;
	image: string;
	proposedBy: User;
	voters: User[];
}