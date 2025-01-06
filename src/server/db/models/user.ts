import type { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  email: string;
  name?: string;
  image?: string;
  emailVerified?: Date | null;
  password?: string | null;
  googleId?: string | null;
  facebookId?: string | null;
}
