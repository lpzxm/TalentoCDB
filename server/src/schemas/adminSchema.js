import { z } from "zod"
/* model Admin {
    id        Int    @id @default(autoincrement())
    name      String
    lastnames String
    email     String @unique
    password  String @unique
  } */

export const adminSchema = z.object({
    name: z.string(),
    lastnames: z.string(),
    email: z.string(),
    password: z.string()
})