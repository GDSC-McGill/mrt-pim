import prisma from "./prisma";
import { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";
import { getEnvironmentVariable } from "@/utils/environment";
import NextAuth, { getServerSession } from "next-auth/next";
import { NextAuthOptions, Session } from "next-auth";


/**
 * Next auth options. Ensures prisma integration and setups email based authentication
 */
export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        EmailProvider({
            server: getEnvironmentVariable("EMAIL_SERVER"),
            from: getEnvironmentVariable("EMAIL_FROM")
        })
    ]
};


/**
 * Export handler
 */
export const handler = NextAuth(authOptions);


/**
 * Wrapper over getServerSession
 */
export async function getSession(): Promise<Session | null> {
    const session = await getServerSession(authOptions);
    return session;
}
