import Nav from "@/components/Nav";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beath",
  description: "Beath's personal website"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
