import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthLayout from "@/components/AuthLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MRT-PIM",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " " + "dark"}>
                <AuthLayout>
                    {children}
                </AuthLayout>
            </body>
        </html>
    );
}
