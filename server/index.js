import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors"
import entrenadorRoutes from "./src/routes/coach.routes.js"
import deportesRoutes from "./src/routes/sport.routes.js"
import playerRoutes from "./src/routes/players.routes.js"
import authRoutes from "./src/routes/auth.routes.js"
import observacionRoutes from "./src/routes/observacion.routes.js"
import observacionEntrenadorRoutes from "./src/routes/observacionEntrenador.routes.js"
const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    return res.json({ hello: "world" })
})

app.use("/auth", authRoutes)
app.use("/entrenadores", entrenadorRoutes)
app.use("/jugadores", playerRoutes)
app.use("/deportes", deportesRoutes)
app.use(observacionEntrenadorRoutes)
app.use(observacionRoutes)


app.listen("4000", () => {
    console.log("Server corriendo http://localhost:4000");
})