import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/provider";
import { Spotlight } from "@/components/Spotlight";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Paramveer Singh",
  description: "Paramveer Singh, 2nd Year , UnderGraduate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{
    background: `radial-gradient(circle at 20% 50%, #e08612, #000 60%)`,
  }}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Spotlight className="opacity-40 mix-blend-screen" fill="#4f46e5"/>
        <Navbar/>
        <div>
        {children}
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
