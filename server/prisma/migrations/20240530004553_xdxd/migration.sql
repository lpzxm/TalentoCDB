-- DropForeignKey
ALTER TABLE "Category_Assist" DROP CONSTRAINT "Category_Assist_id_categoria_fkey";

-- DropForeignKey
ALTER TABLE "Category_Assist" DROP CONSTRAINT "Category_Assist_id_jugador_fkey";

-- DropForeignKey
ALTER TABLE "Category_players" DROP CONSTRAINT "Category_players_id_category_fkey";

-- DropForeignKey
ALTER TABLE "Category_players" DROP CONSTRAINT "Category_players_id_player_fkey";

-- DropForeignKey
ALTER TABLE "Category_sport" DROP CONSTRAINT "Category_sport_id_sport_fkey";

-- DropForeignKey
ALTER TABLE "Coach" DROP CONSTRAINT "Coach_id_sport_fkey";

-- DropForeignKey
ALTER TABLE "Rubric" DROP CONSTRAINT "Rubric_id_sport_fkey";

-- DropForeignKey
ALTER TABLE "Rubric_Score_player" DROP CONSTRAINT "Rubric_Score_player_id_player_fkey";

-- DropForeignKey
ALTER TABLE "Rubric_Score_player" DROP CONSTRAINT "Rubric_Score_player_id_rubric_field_fkey";

-- DropForeignKey
ALTER TABLE "Rubric_fields" DROP CONSTRAINT "Rubric_fields_id_rubric_fkey";

-- AddForeignKey
ALTER TABLE "Category_Assist" ADD CONSTRAINT "Category_Assist_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "Category_sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_Assist" ADD CONSTRAINT "Category_Assist_id_jugador_fkey" FOREIGN KEY ("id_jugador") REFERENCES "Jugador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coach" ADD CONSTRAINT "Coach_id_sport_fkey" FOREIGN KEY ("id_sport") REFERENCES "Sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_sport" ADD CONSTRAINT "Category_sport_id_sport_fkey" FOREIGN KEY ("id_sport") REFERENCES "Sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_players" ADD CONSTRAINT "Category_players_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "Jugador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category_players" ADD CONSTRAINT "Category_players_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "Category_sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rubric" ADD CONSTRAINT "Rubric_id_sport_fkey" FOREIGN KEY ("id_sport") REFERENCES "Sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rubric_fields" ADD CONSTRAINT "Rubric_fields_id_rubric_fkey" FOREIGN KEY ("id_rubric") REFERENCES "Rubric"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rubric_Score_player" ADD CONSTRAINT "Rubric_Score_player_id_player_fkey" FOREIGN KEY ("id_player") REFERENCES "Jugador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rubric_Score_player" ADD CONSTRAINT "Rubric_Score_player_id_rubric_field_fkey" FOREIGN KEY ("id_rubric_field") REFERENCES "Rubric_fields"("id") ON DELETE CASCADE ON UPDATE CASCADE;
