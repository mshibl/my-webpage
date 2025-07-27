import { Toolbar } from "basehub/next-toolbar";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Footer from "./components/footer";
import { CMS_NAME } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: `M. Shibl`,
  description: `Mohamed Shibl's personal website where I talk about AI and other things.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Toolbar />
        <main className="min-h-screen">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
