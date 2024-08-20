import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import { adminSchema } from "../schemas/adminSchema.js";

export const createAdmin = async (req, res) => {
    try {
        const adminData = adminSchema.parse(req.body);

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(adminData.password, 10);

        // Crear administrador en la base de datos
        const newAdmin = await prisma.admin.create({
            data: {
                ...adminData,
                password: hashedPassword,
            },
        });

        res.status(201).json(newAdmin);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
