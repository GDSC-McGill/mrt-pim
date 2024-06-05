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

export async function createUser(email: string, name: string, emailVerified: DateTime, image: string, role: Role[]): Promise<User | null> {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            emailVerified: emailVerified,
            image: image,
            role: role,
        }
    });
    return user;
}

export async function updateUserById(id: string, name?: string, email?: string, emailVerified?: DateTime, image?: string, role?: Role[], sessions?: Session[]): Promise<User | null> {
    const user = await prisma.user.update({
        where: {
            id : id
        },
        data: {
            name: name,
            email: email,
            emailVerified: emailVerified,
            image: image,
            role: role,
        }
    });
    return user;
}