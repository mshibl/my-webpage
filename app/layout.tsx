import { Toolbar } from "basehub/next-toolbar";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import Footer from "./components/footer";
// import { CMS_NAME } from "@/lib/constants";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

export const metadata: Metadata = {
  title: `M. Shibl`,
  description: `Mohamed Shibl's personal website where I talk about AI and other things.`,
  openGraph: {
    title: `M. Shibl`,
    description: `Mohamed Shibl's personal website where I talk about AI and other things.`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
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
          {/* <Footer /> */}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
