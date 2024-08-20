import { prisma } from "../config/prisma.js";

export const findAdminByEmail = async (email) => {
    return await prisma.admin.findUnique({
        where: { email },
    });
};
