import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PortfolioProvider } from "@/context/PortfolioContext";

export const metadata: Metadata = {
  title: "B-link — Build Your Portfolio in Minutes",
  description: "Create a stunning portfolio, pick a template, and share it with the world. No coding required. Free forever.",
  keywords: ["portfolio", "portfolio maker", "personal website", "resume builder", "b-link"],
  openGraph: {
    title: "B-link — Build Your Portfolio in Minutes",
    description: "Create a stunning portfolio, pick a template, and share it with the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <PortfolioProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
