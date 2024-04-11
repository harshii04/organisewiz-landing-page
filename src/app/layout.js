import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://organisewiz.vercel.app/",
  title: "Organise Wiz",
  type: "Software",
  author: "Harshvardhan Agarwal and Abhishek Agarwal",
  description:
    "A plugin that helps you create, organise you pages in side your Figma file easily, so you can focus on what matters.",
  theme: "Dark",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",

  twitter: {
    title: "Organise Wiz",
    description:
      "A Figma plugin that helps you organise you pages inside your Figma file easily.",
    creator: "@harshii04",
    images: ["/src/app/twitter-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}} bg-[#181818]`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
