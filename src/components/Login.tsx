"use client";

import { useUserPrincipal } from "@/hooks/useUserPrincipal";
import { UserPrincipal } from "@/services/authService";
import { signIn, signOut } from "next-auth/react";
import { Button } from "./lib/ui/Button";

/**
 * Temporary component to show case user principal
 */
export default function Login() {
    const principal: UserPrincipal = useUserPrincipal();
    return (
        <div>
            {principal.signedIn &&
                <div>
                    <p>Logged in</p>
                    <p>{principal.user.email}</p>
                    <Button title="Sign out" onClick={() => signOut()}>
                        Sign out
                    </Button>
                </div>
            }
            {!principal.signedIn &&
                <div>
                    <p>Not logged in</p>
                    <Button onClick={() => signIn()}>
                        Sign in
                    </Button>
                </div>
            }
        </div>
    );
}
