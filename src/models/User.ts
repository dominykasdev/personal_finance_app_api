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

  public static userRequestModel() {}
}

export class UserRequestDTO {
  ID?: string;
  email: string;
  email_verified: boolean;
  given_name: string;
  family_name: string;
  nickname: string;
  picture: string;
  user_id: string;
  logins_count: number;
  last_login: Date;
  last_ip: string;

  // constructor({
  //   ID,
  //   email,
  //   emailVerified,
  //   familyName,
  //   givenName,
  //   lastIP,
  //   lastLogin,
  //   loginsCount,
  //   nickname,
  //   picture,
  //   userID,
  // }: IUser) {
  //   this.ID = ID;
  //   this.email = email;
  //   this.email_verified = emailVerified;
  //   this.given_name = givenName;
  //   this.family_name = familyName;
  //   this.nickname = nickname;
  //   this.picture = picture;
  //   this.user_id = userID;
  //   this.logins_count = loginsCount;
  //   this.last_login = lastLogin;
  //   this.last_ip = lastIP;
  // }

  constructor({
    ID,
    email,
    email_verified,
    given_name,
    family_name,
    nickname,
    picture,
    user_id,
    logins_count,
    last_login,
    last_ip,
  }) {
    this.ID = ID;
    this.email = email;
    this.email_verified = email_verified;
    this.given_name = given_name;
    this.family_name = family_name;
    this.nickname = nickname;
    this.picture = picture;
    this.user_id = user_id;
    this.logins_count = logins_count;
    this.last_login = last_login;
    this.last_ip = last_ip;
  }
}
