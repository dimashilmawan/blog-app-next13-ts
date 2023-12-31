import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeContext from "./context/ThemeContext";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-100  text-gray-900 dark:bg-gray-900 dark:text-gray-200`}
      >
        <ThemeContext>
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </ThemeContext>
      </body>
    </html>
  );
}
