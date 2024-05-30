import z from "zod"
// model Rubric {
//     id       Int @id @default(autoincrement())
//     id_sport Int

//     sport  Sport           @relation(fields: [id_sport], references: [id])
//     fields Rubric_fields[]
//   }

//   model Rubric_fields {
//     id          Int    @id @default(autoincrement())
//     name        String
//     description String
//     min_score   Int
//     max_score   Int
//     id_rubric   Int
//     rubric      Rubric @relation(fields: [id_rubric], references: [id])

//     scores_players Rubric_Score_player[]
//   }

//   model Rubric_Score_player {
//     id              Int           @id @default(autoincrement())
//     score           Int
//     id_player       Int
//     id_rubric_field Int
//     player          Jugador       @relation(fields: [id_player], references: [id])
//     rubric          Rubric_fields @relation(fields: [id_rubric_field], references: [id])
//   }
export const rubricSchema = z.object({
    id_sport: z.number()
})
export const rubricFieldSchema = z.object({
    name: z.string(),
    description: z.string(),
    max_score: z.number(),
    id_rubric: z.number()
})
export const rubricScorePlayerSchema = z.object({
    score: z.number(),
    id_player: z.number().optional()
})