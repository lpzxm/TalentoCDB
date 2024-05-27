-- CreateTable
CREATE TABLE "Category_Assist" (
    "id" SERIAL NOT NULL,
    "id_categoria" INTEGER NOT NULL,
    "id_jugador" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_Assist_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Category_Assist" ADD CONSTRAINT "Category_Assist_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Category_sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_Assist" ADD CONSTRAINT "Category_Assist_id_jugador_fkey" FOREIGN KEY ("id_jugador") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
