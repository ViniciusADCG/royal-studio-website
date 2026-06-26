import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Studio  | Beauty-Academy",
  description: "Especialistas em extensão de cílios, design de sobrancelhas e alongamento de unhas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      {/* Limpamos o body e deixamos apenas as fontes e o layout flex */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen relative overflow-x-hidden`}>
        
        {/* DIV DO FUNDO (Esta é a solução definitiva) */}
        {/* Ela fica fixa (fixed), cobre tudo (inset-0) e fica atrás de tudo (-z-10) */}
        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/marmoree.jpg')" }}
        />
        
        {/* O nosso Header entra aqui, no topo de todas as páginas */}
        <Header />
        
        {/* O conteúdo da página atual (a nossa vitrine) entra aqui */}
        <div className="flex-grow">
          {children}
        </div>

        {/* O nosso Footer entra aqui, no fundo de todas as páginas */}
        <Footer />
        
      </body>
    </html>
  );
}