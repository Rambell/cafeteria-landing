import type { Metadata } from "next";
import { playfair, dmSans } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Menta & Café | Brunch & Cafetería",
  description: "El mejor brunch de Santiago. Ingredientes frescos, ambiente cálido y café de especialidad.",
  keywords: ["cafetería", "brunch", "café de especialidad", "Santiago", "desayuno"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-body bg-cream text-espresso antialiased`}
      >
        {children}
      </body>
    </html>
  );
}