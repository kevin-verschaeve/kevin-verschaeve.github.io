import { User } from './user';

export class Movie {
	id: number;
	name: string;
	image: string;
	proposedBy: User;
	voters: User[];
} 
