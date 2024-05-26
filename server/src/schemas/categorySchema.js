import z from "zod"
// model Category_sport {
//     id       Int                @id @default(autoincrement())
//     id_sport Int
//     name String
//     rules String
//     img String
//     sport    Sport              @relation(fields: [id_sport], references: [id])
//     players  Category_players[]
//   }
export const categorySchema = z.object({
    name: z.string(),
    rules: z.string(),
    img: z.string().optional(),
    id_sport: z.string().transform(Number).or(z.number()).optional()
})