import prisma from "@/configuration/prisma";
import { User } from "@prisma/client";


/**
 * Finds uer by email
 */
export async function findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    return user;
}
