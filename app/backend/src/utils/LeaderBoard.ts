import { ILeaderBoard, IScore } from '../interfaces/ILeaderBoard';

const leaderBoard = (team: { name: string }, matches: ILeaderBoard[]) => {
  const victories = matches.filter((match) => match.homeTeamGoals > match.awayTeamGoals);
  const losses = matches.filter((match) => match.homeTeamGoals < match.awayTeamGoals);
  const draws = matches.filter((match) => match.homeTeamGoals === match.awayTeamGoals);
  const totalGoals = matches.reduce((acc, curr) => curr.homeTeamGoals + acc, 0);
  const goalsConceded = matches.reduce((acc, curr) => curr.awayTeamGoals + acc, 0);

  const objBoard = {
    ...team,
    totalPoints: victories.length * 3 + draws.length,
    totalGames: matches.length,
    totalVictories: victories.length,
    totalDraws: draws.length,
    totalLosses: losses.length,
    goalsFavor: totalGoals,
    goalsOwn: goalsConceded,
    goalsBalance: totalGoals - goalsConceded,
    efficiency: (((victories.length * 3 + draws.length) / (matches.length * 3)) * 100).toFixed(2),
  };

  return objBoard;
};

const sortLeaderBoard = (verifyTeam: IScore[]) => verifyTeam.sort((a, b) => {
  if (a.totalPoints < b.totalPoints) return 1;
  if (a.totalPoints > b.totalPoints) return -1;
  if (a.totalVictories < b.totalVictories) return 1;
  if (a.totalVictories > b.totalVictories) return -1;
  if (a.goalsBalance < b.goalsBalance) return 1;
  if (a.goalsBalance > b.goalsBalance) return -1;
  if (a.goalsFavor < b.goalsFavor) return 1;
  if (a.goalsFavor > b.goalsFavor) return -1;
  if (a.goalsOwn < b.goalsOwn) return 1;
  if (a.goalsOwn > b.goalsOwn) return -1;
  return 0;
});

export {
  leaderBoard,
  sortLeaderBoard,
};
