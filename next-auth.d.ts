import NextAuth,{type DefaultSession} from "next-auth"
import { UserRole } from "@prisma/client"

export type ExtendedUser = DefaultSession["user"] & {
  role:UserRole;
  isTwoFactorEnabled : boolean;
  isOAuth:boolean;
};

//Isko bolte hain Module Augmentation
declare module "next-auth" {
   interface Session  {
    user:  ExtendedUser;
  }
}
declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
  }
}
