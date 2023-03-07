export default interface ILeaderBoardService {
  getAll(): Promise<unknown[]>,
  getAway(): Promise<unknown[]>,
}
