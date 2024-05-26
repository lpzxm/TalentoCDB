/*
  Warnings:

  - You are about to drop the column `sportID` on the `Coach` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id_sport]` on the table `Coach` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id_sport` to the `Coach` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Coach" DROP COLUMN "sportID",
ADD COLUMN     "id_sport" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Coach_id_sport_key" ON "Coach"("id_sport");

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_id_sport_fkey" FOREIGN KEY ("id_sport") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
