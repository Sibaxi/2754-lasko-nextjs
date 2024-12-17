import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";
import Menu from "@/components/Menu";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import AgeVerificationCheck from "@/components/AgeVerificationCheck";

const neutrafaceDisplay = localFont({
  src: "./fonts/Neutraface_Display-Titling.woff2",
  variable: "--font-Neutraface-Display",
  weight: "400 500 600 700 900",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lasko",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${raleway.variable} ${neutrafaceDisplay.variable} antialiased bg-white min-h-screen `}
        style={{
          backgroundImage: 'url("/bg.jpg")',
          backgroundSize: "1920px 912px",
        }}
      >
        <AgeVerificationCheck>
          <Menu />
          {children}
          <Footer />
        </AgeVerificationCheck>
      </body>
    </html>
  );
}
