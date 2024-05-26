import z from "zod"
// id        Int      @id @default(autoincrement())
// email     String   @unique
// password  String   @unique
// nombres   String
// apellidos String
// birthDay  DateTime
// codigo    Int      @unique
// grado     String
// seccion   String

export const playerSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    nombres: z.string(),
    apellidos: z.string(),
    birthDay: z.string().or(z.date()),
    codigo: z.string().transform(Number).or(z.number()),
    grado: z.string(),
    seccion: z.string(),
})