import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Importação do Google Fonts
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next"

// Configuração da nova fonte Inter
const inter = Inter({ subsets: ["latin"] });


// ... (configuração das fontes)

export const metadata: Metadata = {
  title: "Royal Studio | Beauty-Academy",
  description: "Especialistas em extensão de cílios, design de sobrancelhas e alongamento de unhas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen relative overflow-x-hidden`}>
        
        {/* ========================================== */}
        {/* GOOGLE ANALYTICS 4 (GA4)                   */}
        {/* ========================================== */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-YYT3NYVJ7W" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YYT3NYVJ7W');
          `}
        </Script>

        {/* ========================================== */}
        {/* META PIXEL (FACEBOOK/INSTAGRAM)            */}
        {/* ========================================== */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1373481554640257');
            fbq('track', 'PageView');
          `}
        </Script>

        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/marmoree.jpg')" }}
        />
        
        <Header />
        
        <div className="flex-grow">
          {children}
        </div>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}