import { USERS } from './user.fixtures';
import { Film } from './film';

export const FILMS: Film[] = [
	{
		id: 12345,
		name: 'La route',
		image: null,
		proposedBy: USERS[1],
		voters: [USERS[0], USERS[2]]
	},
	{
		id: 56789,
		name: 'Retour vers le futur',
		image: null,
		proposedBy: USERS[1],
		voters: [USERS[2], USERS[3]]
	},
	{
		id: 56673,
		name: 'Blanche fesse et les sept mains',
		image: null,
		proposedBy: USERS[3],
		voters: [USERS[0]]
	}
];
