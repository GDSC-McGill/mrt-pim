"use server";

import { UserPrincipal, getUserPrincipal as getPrincipal } from "@/services/authService";

/**
 * Gets the user principal (currently signed in user)
 */
export async function getUserPrincipal(): Promise<UserPrincipal> {
    const user = await getPrincipal();
    return user;
}
