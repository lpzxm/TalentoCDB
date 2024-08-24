/*
  Warnings:

  - You are about to drop the column `id_entrenador` on the `Observaciones_Jugador` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Observaciones_Jugador" DROP CONSTRAINT "Observaciones_Jugador_id_entrenador_fkey";

-- AlterTable
ALTER TABLE "Observaciones_Jugador" DROP COLUMN "id_entrenador";
