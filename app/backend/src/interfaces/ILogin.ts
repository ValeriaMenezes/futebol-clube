export interface ILogin {
  id?: number,
  email: string,
  password: string,
}

export interface IUser extends ILogin {
  id: number,
  username: string,
}

export interface IRole {
  role: string,
}
