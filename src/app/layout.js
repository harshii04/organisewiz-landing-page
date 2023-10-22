import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Organise Wiz",
  description:
    "A figma plugin that helps you to organise your pages in a figma file quickly when starting out a new projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}} bg-[#181818]`}>{children}</body>
    </html>
  );
}
