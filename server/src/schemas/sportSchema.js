import z from "zod"

// model Sport {
//     id         Int              @id @default(autoincrement())
//     name       String

//     coach Coach? 
//     categories Category_sport[]
//     rubrics    Rubric[]
//   }


export const sportSchema = z.object({
    nombre: z.string()  
})