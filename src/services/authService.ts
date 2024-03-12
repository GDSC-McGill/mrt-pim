import { User } from "@prisma/client";
import { Session } from "next-auth";
import { findUserByEmail } from "./userService";
import { getSession } from "@/configuration/security";


/**
 * Represents the currently logged in user
 */
export type UserPrincipal = {
    signedIn: false
} | {
    signedIn: true,
    user: User
}


/**
 * Gets the user principal (currently signed in user). Uses nexatuth server session
 */
export async function getUserPrincipal(): Promise<UserPrincipal> {
    // next auth server session
    const session: Session | null = await getSession();
    const signedOut: UserPrincipal = { signedIn: false };

    // if invalid return signed out
    if (!session || !session.user?.email) return signedOut;

    // find the user in the db
    const user = await findUserByEmail(session.user.email);
    if (!user) return signedOut;

    return {
        signedIn: true,
        user
    };
}
