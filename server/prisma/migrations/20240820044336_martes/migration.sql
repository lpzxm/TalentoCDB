/*
  Warnings:

  - Added the required column `img` to the `Jugador` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jugador" ADD COLUMN     "img" TEXT NOT NULL;
