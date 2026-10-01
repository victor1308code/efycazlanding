import type { Metadata, Viewport } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { assetPath } from "@/utils/assets";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#444754",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://efycazcontabilidade.com.br"),
  title: "Efycaz Contabilidade | Contabilidade para empresas",
  description:
    "Serviços contábeis para empresas, empreendedores e profissionais que buscam mais organização e clareza para cuidar do seu negócio.",
  keywords: [
    "contabilidade",
    "Efycaz Contabilidade",
    "contabilidade para empresas",
    "assessoria fiscal",
    "abertura de empresa",
    "departamento pessoal",
    "consultoria contábil",
    "MEI",
    "microempresa",
    "Águas Lindas de Goiás",
  ],
  authors: [{ name: "Efycaz Contabilidade" }],
  creator: "Efycaz Contabilidade",
  publisher: "Efycaz Contabilidade",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://efycazcontabilidade.com.br",
    siteName: "Efycaz Contabilidade",
    title: "Efycaz Contabilidade | Contabilidade para empresas",
    description:
      "Serviços contábeis para empresas, empreendedores e profissionais que buscam mais organização e clareza para cuidar do seu negócio.",
    images: [
      {
        url: assetPath("/images/logo-perfil.png"),
        width: 1080,
        height: 1080,
        alt: "Efycaz Contabilidade - Logotipo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Efycaz Contabilidade | Contabilidade para empresas",
    description:
      "Serviços contábeis para empresas, empreendedores e profissionais que buscam mais organização e clareza para cuidar do seu negócio.",
    images: [assetPath("/images/logo-perfil.png")],
  },
  icons: {
    icon: assetPath("/images/emblema.png"),
    shortcut: assetPath("/images/emblema.png"),
    apple: assetPath("/images/emblema.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${inter.variable}`}>
      <body className="font-sans antialiased selection:bg-brand-primary-light selection:text-brand-dark">
        {/* Skip link para acessibilidade */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-primary focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
