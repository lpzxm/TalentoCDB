/*
  Warnings:

  - A unique constraint covering the columns `[id_sport]` on the table `Rubric` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rubric_id_sport_key" ON "Rubric"("id_sport");
