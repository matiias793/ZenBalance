import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zen Balance - Bienestar y Relajación",
  description: "Aplicación web de masajes con diseño mobile-first y tonalidades pastel. Descubre nuestros servicios de bienestar y relajación.",
  keywords: "masajes, bienestar, relajación, zen balance, spa, terapéutico",
  authors: [{ name: "Zen Balance" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "Zen Balance - Bienestar y Relajación",
    description: "Aplicación web de masajes con diseño mobile-first y tonalidades pastel. Descubre nuestros servicios de bienestar y relajación.",
    type: "website",
    locale: "es_ES",
    siteName: "Zen Balance",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Zen Balance - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zen Balance - Bienestar y Relajación",
    description: "Aplicación web de masajes con diseño mobile-first y tonalidades pastel.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen animated-gradient">
          {children}
        </div>
      </body>
    </html>
  );
}
