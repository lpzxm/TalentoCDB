-- CreateTable
CREATE TABLE "Jugador" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "birthDay" TIMESTAMP(3) NOT NULL,
    "codigo" INTEGER NOT NULL,
    "grado" TEXT NOT NULL,
    "seccion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Jugador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coach" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "birthDay" TIMESTAMP(3) NOT NULL,
    "sportID" INTEGER NOT NULL,

    CONSTRAINT "Coach_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sport" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category_sport" (
    "id" SERIAL NOT NULL,
    "id_sport" INTEGER NOT NULL,

    CONSTRAINT "Category_sport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category_players" (
    "id" SERIAL NOT NULL,
    "id_player" INTEGER NOT NULL,
    "id_category" INTEGER NOT NULL,

    CONSTRAINT "Category_players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rubric" (
    "id" SERIAL NOT NULL,
    "id_sport" INTEGER NOT NULL,

    CONSTRAINT "Rubric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rubric_fields" (
    "id" SERIAL NOT NULL,
    "id_rubric" INTEGER NOT NULL,

    CONSTRAINT "Rubric_fields_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_email_key" ON "Jugador"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_password_key" ON "Jugador"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Jugador_codigo_key" ON "Jugador"("codigo");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_email_key" ON "Coach"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Coach_password_key" ON "Coach"("password");

-- AddForeignKey
ALTER TABLE "Category_sport" ADD CONSTRAINT "Category_sport_id_sport_fkey" FOREIGN KEY ("id_sport") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_players" ADD CONSTRAINT "Category_players_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "Jugador"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_players" ADD CONSTRAINT "Category_players_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category_sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rubric" ADD CONSTRAINT "Rubric_id_sport_fkey" FOREIGN KEY ("id_sport") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rubric_fields" ADD CONSTRAINT "Rubric_fields_id_rubric_fkey" FOREIGN KEY ("id_rubric") REFERENCES "Rubric"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
