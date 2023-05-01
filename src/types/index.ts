export interface IUser {
  name: string
  password: string
}
export interface IUserRows {
  id: number
  name: string
}

export enum ErrorCode {
  NameOrPasswordIsNull = -1001,
  NameIsRegistered = -1002,
}
export enum ErrorStatus {
  NameOrPasswordIsNull = 'NameOrPasswordIsNull',
  NameIsRegistered = 'NameIsRegistered',
}
export enum ErrorMessage {
  NameOrPasswordIsNull = '用户名或密码为空',
  NameIsRegistered = '用户名已经被注册',
}
