export default interface ILeaderBoardService {
  getHome(): Promise<unknown[]>,
  getAway(): Promise<unknown[]>,
}
