import Matches from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';
import { leaderBoard, sortLeaderBoard } from '../utils/LeaderBoard';

export default class LeaderBoardService {
  getAll = async () => {
    const allTeams = await Teams.findAll();
    const infoMatches: any = await Matches.findAll(
      { where: { inProgress: false },
        include: [
          { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
          { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
        ],
      },
    );

    const arrayTeams = allTeams.map((team) => ({ name: team.teamName }));

    const verifyTeam: any = arrayTeams.map((team) => {
      const filterMatches = infoMatches
        .filter((match: any) => team.name === match.homeTeam.teamName);

      const result = leaderBoard(team, filterMatches);
      return result;
    });

    const result = sortLeaderBoard(verifyTeam);
    return result;
  };
}
