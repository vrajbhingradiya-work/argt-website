import type { Metadata } from "next";
import { Yanone_Kaffeesatz, Barlow_Condensed } from "next/font/google"; // Import the Yanone Kaffeesatz font
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const yanoneKaffeesatz = Yanone_Kaffeesatz({ subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "ARGT : Best Global Traders",
  description:
    "AL Roshan Global Traders United, best global traders with best in class services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link
          rel="apple-icon"
          href="/apple-icon.png"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className={barlowCondensed.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
