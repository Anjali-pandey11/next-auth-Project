import {z} from "zod"

export const LoginSchema = z.object({
  email: z.string({}).email({
    message:"email is required"
  }),
  password: z.string().min(6,{
    message:"password is required"
  })
});

