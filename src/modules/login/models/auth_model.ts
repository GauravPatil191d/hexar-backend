export interface LoginData {
  username: string;
  password: string;
}

export default class AuthEntity implements LoginData {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}