import { RowDataPacket } from "mysql2";

export interface IUser extends RowDataPacket {
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
}
