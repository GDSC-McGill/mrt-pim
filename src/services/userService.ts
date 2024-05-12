import prisma from "@/configuration/prisma";
import { User } from "@prisma/client";


/**
 * Finds user by email
 */
export async function findUserByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    return user;
}

export async function findUserById(id: string): Promise<User | null> {
    return await prisma.user.findUnique({
        where: {
            id
        }
    });
}

export async function findAllUsers(): Promise<User[]> {
    return await prisma.user.findMany();
}

export async function deleteUserById(id: string): Promise<User | null> {
    return await prisma.user.delete({
        where: {
            id
        }
    });
}