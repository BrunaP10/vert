import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, DM_Sans } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VÉRT | Lifestyle, Performance & Technology",
  description:
    "Descubra a VÉRT. Óculos que unem estilo, tecnologia e personalidade.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${dmSans.variable}`}
    >
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

