import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Intentar encontrar el usuario como jugador
        let user = await prisma.jugador.findUnique({
            where: { email }
        });

        // Si no se encuentra como jugador, buscar como coach
        let userType = 'Jugador';
        if (!user) {
            user = await prisma.coach.findUnique({
                where: { email }
            });
            userType = 'Coach';
        }

        // Si el usuario no existe, devolver error
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Comparar contraseña
        const isValidPassword = await bcrypt.compare(password, user.password);

        // Si la contraseña no es válida, devolver error
        if (!isValidPassword) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        // Generar token JWT
        const token = jwt.sign({ userId: user.id, userType }, JWT_SECRET);

        // Devolver token y detalles del usuario
        return res.json({ token, user: { id: user.id, email: user.email, nombres: user.nombres, apellidos: user.apellidos, userType } });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Server error" });
    }
};