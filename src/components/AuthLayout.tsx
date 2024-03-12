"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
};

/**
 * Client side layout for nextauth
 */
export default function AuthLayout(props: Props) {
    return <SessionProvider>{props.children}</SessionProvider>;
}
