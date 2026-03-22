import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "StudyOS — AI Productivity OS for Students",
    description:
        "An AI-powered productivity platform to plan, organize, and optimize your academic life.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    {children}
                    <Toaster richColors position="bottom-right" />
                </Providers>
            </body>
        </html>
    );
}
