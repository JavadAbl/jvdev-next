import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

/* const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins", // Optional: CSS variable for Tailwind/CSS usage
  display: "swap",
}); */

export const metadata: Metadata = {
  title: "Mohammad Javad Abolhasani Far | Resume & Portfolio",
  description:
    "Full Stack JavaScript Developer specializing in building exceptional digital experiences. React, Node.js, NestJS, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Node.js",
    "NestJS",
    "Portfolio",
    "Resume",
  ],
  authors: [{ name: "Mohammad Javad Abolhasani Far" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*  eslint-disable-next-line @next/next/no-css-tags */}
        <link rel="stylesheet" href="/fonts/fontawesome/all.min.css" />
      </head>
      <body
        className={cn(
          /* geistSans.variable,
          geistMono.variable,
          poppins.variable, */
          "antialiased bg-background text-foreground font-mono",
        )}
      >
        {children}
      </body>
    </html>
  );
}
