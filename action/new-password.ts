"use server";

import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { NewPasswordSchema } from "@/schemas";
import z from "zod";
import  bcrypt from "bcrypt"
import { db } from "@/lib/db";

export const newPassword = async (
  values:z.infer<typeof NewPasswordSchema>,
  token?:string |null,
) => {
  if(!token){
    return {error : "Missing token!"}
  }

  const validatedFields = NewPasswordSchema.safeParse(values)
   
  if(!validatedFields.success){
    return {error:"Invalid fields!"}
  }

  const {password} = validatedFields.data;

  const existingToken = await getPasswordResetTokenByEmail(token);

  if(!existingToken){
    return {error: "Invalid token"}
  }
   
  const hasExpired = new Date(existingToken.expires) < new Date();

  if(hasExpired){
    return { error : "Token has expired!"}
  }

  const existingUser = await getUserByEmail
(existingToken.email);

if(!existingUser){
  return {error : "EMail does not exist"}
}

const hasPassword = await bcrypt.hash(password, 10);

await db.user.update({
   where:{id:existingUser.id},
   data:{password:hasPassword},
})

await db.passwordResetToken.delete({
  where:{id:existingToken.id},
})

return {success:"Password updated!"}

}