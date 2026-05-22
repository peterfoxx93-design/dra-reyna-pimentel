import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Centro Odontológico Dra. Reyna Pimentel | Expertos en crear sonrisas",
  description:
    "Centro Odontológico en Nagua, Rep. Dom. Especialistas en Diseño de Sonrisa, Ortodoncia, Endodoncia y más. Reconocidos por el SNS como mejor odontóloga zona Noreste. ¡Agenda tu cita!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
