"use client";

import { getUserPrincipal } from "@/controllers/authController";
import { UserPrincipal } from "@/services/authService";
import { useEffect, useState } from "react";


/**
 * React hook for user principal (currently signed in user)
 */
export function useUserPrincipal(): UserPrincipal {
    // state for the principal
    const [principal, setPrincipal] = useState<UserPrincipal>({
        signedIn: false
    });

    /**
     * Gets the principal by calling the server action.
     * Sets the state
     */
    const getPrincipal = async () => {
        const principal: UserPrincipal = await getUserPrincipal();
        setPrincipal(principal);
    };

    /**
     * Fetchs user on mount
     */
    useEffect(() => {
        getPrincipal();
    }, []);

    return principal;
}
