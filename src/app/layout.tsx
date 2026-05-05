import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { SITE } from "../lib/constants";
import "./globals.css";


export const metadata: Metadata = {
  title: "MonieTally | Money on your mind. Not on our servers.",
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: "MonieTally | Money on your mind. Not on our servers.",
    description: SITE.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MonieTally | Money on your mind. Not on our servers.",
    description: SITE.description,
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
