-- CreateTable
CREATE TABLE "Observaciones_Entrenador" (
    "id" SERIAL NOT NULL,
    "id_entrenador" INTEGER NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "Observaciones_Entrenador_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Observaciones_Entrenador" ADD CONSTRAINT "Observaciones_Entrenador_id_entrenador_fkey" FOREIGN KEY ("id_entrenador") REFERENCES "Coach"("id") ON DELETE CASCADE ON UPDATE CASCADE;
