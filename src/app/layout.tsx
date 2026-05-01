import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SITE } from "../lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traccia | Your finances, beautifully traced",
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "Traccia | Your finances, beautifully traced",
    description: SITE.description,
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Traccia | Privacy-first personal finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traccia | Your finances, beautifully traced",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
