import z from "zod"

// model Coach {
//     id        Int      @id @default(autoincrement())
//     email     String   @unique
//     password  String   @unique
//     nombres   String
//     apellidos String
//     birthDay  DateTime
//     sportID   Int
//   }

const coachSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    nombres: z.string(),
    apellidos: z.string(),
    birthDay: z.string().or(z.date()),
    id_sport: z.string().transform(Number).or(z.number())
})

export { coachSchema }