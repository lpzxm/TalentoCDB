import express from "express";
import cors from "cors"
import entrenadorRoutes from "./src/routes/coach.routes.js"
import deportesRoutes from "./src/routes/sport.routes.js"
import playerRoutes from "./src/routes/players.routes.js"
const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    return res.json({ hello: "world" })
})

app.use("/entrenadores", entrenadorRoutes)
app.use("/jugadores",playerRoutes )
app.use("/deportes", deportesRoutes)


app.listen("4000", () => {
    console.log("Server corriendo http://localhost:4000");
})