import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Deep Half Rashguard",
    template: "%s | Deep Half Rashguard"
  },
  description: "Premium BJJ rashguards designed for performance and style",
  metadataBase: new URL('https://deep-half-rashguard.vercel.app'),
  openGraph: {
    title: "Deep Half Rashguard",
    description: "Premium BJJ rashguards designed for performance and style",
    url: "https://deep-half-rashguard.vercel.app",
    siteName: "Deep Half Rashguard",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-black text-white antialiased">
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
