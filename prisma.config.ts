import 'dotenv/config'
import { defineConfig } from '@prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',

  // migrations path define karte hain taaki Prisma ko pata ho migration files kaha store karni hain. Default prisma/migrations folder use kar rahe ho

   migrations: {
    path: 'prisma/migrations',
  },
  
  datasource: {
    url: process.env.DATABASE_URL!,
  },
})




