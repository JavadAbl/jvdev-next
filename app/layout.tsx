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
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='12' ry='12' fill='%23FFD700'/%3E%3Ctext x='50' y='65' font-size='60' font-weight='bold' text-anchor='middle' fill='black' font-family='Arial'%3EJV%3C/text%3E%3C/svg%3E",
  },
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
