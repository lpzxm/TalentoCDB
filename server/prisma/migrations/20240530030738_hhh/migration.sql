/*
  Warnings:

  - You are about to drop the column `id_rubric` on the `Rubric_fields` table. All the data in the column will be lost.
  - You are about to drop the `Rubric` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `id_sport` to the `Rubric_fields` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rubric" DROP CONSTRAINT "Rubric_id_sport_fkey";

-- DropForeignKey
ALTER TABLE "Rubric_fields" DROP CONSTRAINT "Rubric_fields_id_rubric_fkey";

-- AlterTable
ALTER TABLE "Rubric_fields" DROP COLUMN "id_rubric",
ADD COLUMN     "id_sport" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Rubric";

-- AddForeignKey
ALTER TABLE "Rubric_fields" ADD CONSTRAINT "Rubric_fields_id_sport_fkey" FOREIGN KEY ("id_sport") REFERENCES "Sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;
