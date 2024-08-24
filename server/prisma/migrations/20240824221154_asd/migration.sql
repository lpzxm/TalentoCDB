-- CreateTable
CREATE TABLE "Observaciones_Jugador" (
    "id" SERIAL NOT NULL,
    "id_atleta" INTEGER NOT NULL,
    "id_entrenador" INTEGER NOT NULL,
    "observacion" TEXT NOT NULL,

    CONSTRAINT "Observaciones_Jugador_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Observaciones_Jugador" ADD CONSTRAINT "Observaciones_Jugador_id_atleta_fkey" FOREIGN KEY ("id_atleta") REFERENCES "Jugador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Observaciones_Jugador" ADD CONSTRAINT "Observaciones_Jugador_id_entrenador_fkey" FOREIGN KEY ("id_entrenador") REFERENCES "Coach"("id") ON DELETE CASCADE ON UPDATE CASCADE;
