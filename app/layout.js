import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="h-full bg-white">
      <body className={inter.className} class="h-full">
        {children}
      </body>
    </html>
  );
}
