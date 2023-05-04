import { AccessLevel } from './user-access.enum';

export interface User {
  username: string;
  accessToken: string;
  level: AccessLevel;
}