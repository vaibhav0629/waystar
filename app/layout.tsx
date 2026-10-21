import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Source_Sans_3 } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import { site } from "@/lib/site";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: "Tutoring in Math, Physics, Chemistry, English, and Programming (C, C++, Java, Python, SQL). Online and in Jakarta Barat.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
