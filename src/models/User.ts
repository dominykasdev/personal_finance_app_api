import { IUser } from "../interfaces";

export class User {
  ID: string;
  email: string;
  emailVerified: boolean;
  givenName: string;
  familyName: string;
  nickname: string;
  picture: string;
  userID: string;
  loginsCount: number;
  lastLogin: Date;
  lastIP: string;

  constructor({
    ID,
    email,
    emailVerified,
    familyName,
    givenName,
    lastIP,
    lastLogin,
    loginsCount,
    nickname,
    picture,
    userID,
  }: IUser) {
    this.ID = ID;
    this.email = email;
    this.emailVerified = emailVerified;
    this.givenName = givenName;
    this.familyName = familyName;
    this.nickname = nickname;
    this.picture = picture;
    this.userID = userID;
    this.loginsCount = loginsCount;
    this.lastLogin = lastLogin;
    this.lastIP = lastIP;
  }
}
