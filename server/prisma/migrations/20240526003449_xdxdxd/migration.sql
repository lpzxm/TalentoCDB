/*
  Warnings:

  - Added the required column `img` to the `Category_sport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Category_sport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rules` to the `Category_sport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Rubric_fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `max_score` to the `Rubric_fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `min_score` to the `Rubric_fields` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Rubric_fields` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category_sport" ADD COLUMN     "img" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "rules" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Jugador" ADD COLUMN     "status_img_academic" TEXT,
ADD COLUMN     "status_img_behaviour" TEXT,
ADD COLUMN     "status_main_sport" TEXT;

-- AlterTable
ALTER TABLE "Rubric_fields" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "max_score" INTEGER NOT NULL,
ADD COLUMN     "min_score" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Rubric_Score_player" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "id_player" INTEGER NOT NULL,
    "id_rubric_field" INTEGER NOT NULL,

    CONSTRAINT "Rubric_Score_player_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rubric_Score_player" ADD CONSTRAINT "Rubric_Score_player_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rubric_Score_player" ADD CONSTRAINT "Rubric_Score_player_id_rubric_field_fkey" FOREIGN KEY ("id_rubric_field") REFERENCES "Rubric_fields"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
