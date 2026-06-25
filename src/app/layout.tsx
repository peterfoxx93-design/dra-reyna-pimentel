import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ChatWidgetValentina = dynamic(() => import('@/components/ChatWidget'), { ssr: false })

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Centro Odontológico Dra. Reyna Pimentel | Expertos en crear sonrisas",
  description: "Centro Odontológico en Nagua, Rep. Dom. Especialistas en Diseño de Sonrisa, Ortodoncia, Endodoncia y más. Reconocidos por el SNS como mejor odontóloga zona Nordeste. ¡Agenda tu cita!",
  icons: {
    icon: "/images/logo-clinica.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
              <ChatWidgetValentina />
      </body>
    </html>
  );
}
