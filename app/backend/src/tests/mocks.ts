export const allTeams = [
  {
		"id": 1,
		"teamName": "Avaí/Kindermann"
	},
	{
		"id": 2,
		"teamName": "Bahia"
	},
	{
		"id": 3,
		"teamName": "Botafogo"
	},
];

export const teamById = {
	"id": 1,
	"teamName": "Avaí/Kindermann"
};

export const userToken = {
	id: 2,
	username: 'User',
	role: 'user',
	email: 'user@user.com',
	password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'	
}

export const allMatches = [
	{
		"id": 1,
		"homeTeamId": 16,
		"homeTeamGoals": 1,
		"awayTeamId": 8,
		"awayTeamGoals": 1,
		"inProgress": false,
		"homeTeam": {
			"teamName": "São Paulo"
		},
		"awayTeam": {
			"teamName": "Grêmio"
		}
	},
	{
		"id": 2,
		"homeTeamId": 9,
		"homeTeamGoals": 1,
		"awayTeamId": 14,
		"awayTeamGoals": 1,
		"inProgress": false,
		"homeTeam": {
			"teamName": "Internacional"
		},
		"awayTeam": {
			"teamName": "Santos"
		}
	},
	{
		"id": 3,
		"homeTeamId": 4,
		"homeTeamGoals": 3,
		"awayTeamId": 11,
		"awayTeamGoals": 0,
		"inProgress": false,
		"homeTeam": {
			"teamName": "Corinthians"
		},
		"awayTeam": {
			"teamName": "Napoli-SC"
		}
	},
]