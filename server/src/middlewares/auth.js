import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

export const auth = async (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ error: "Access denied" });
    }

    try {
        const { userId, userType } = jwt.verify(token, JWT_SECRET);
        let usuario = null;
        if (userType == "Coach") {
            usuario = await prisma.coach.findFirst({
                where: {
                    id: userId
                },
                include: {
                    sport: true
                }
            })
        }
        if (userType == "Jugador") {
            usuario = await prisma.jugador.findFirst({
                where: {
                    id: userId
                }
            })
            if (usuario.id) {
                const deporteUsuario = await prisma.category_players.findFirst({
                    where: {
                        id_player: usuario.id
                    },
                    include: {
                        category: {
                            include: {
                                sport: true
                            }
                        }
                    }
                })
                usuario.sport = deporteUsuario.category.sport
            }
        }

        if (!usuario) return res.status(401).json({ error: "No estas autenticado" })
        usuario.rol = userType
        req.usuario = usuario;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};