import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
// import Head from "next/head";

export const metadata = {
  title: {
    default: 'Have Some Popcorn!',
    template: '%s | JaimesJames'
  },
  description: 'I hate to Luv popcorn!',
  name:'hi'
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
