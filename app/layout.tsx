import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DeviceRecommendation } from "@/components/rec/DeviceRecomment";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NSA-Portal",
  description: "NSA PORTAL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <DeviceRecommendation />
        {children}
      </body>
    </html>
  );
}
