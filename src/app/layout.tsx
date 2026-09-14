import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visible Kerala | Website Design & Hosting for Kerala Small Businesses",
  description:
    "We build modern, mobile-friendly websites for Kerala's small businesses — hosting and domain included, live in under a week, with zero hidden costs.",
  icons: {
    icon: "/logo-mark-isolated.png",
  },
  openGraph: {
    title: "Visible Kerala — From Invisible to Unmissable | Website Agency",
    description:
      "Modern websites for small businesses across all 14 districts of Kerala. Hosting included, pay only after you see it live.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Baloo+Chettan+2:wght@600;800&family=Inter:wght@400;500;600&family=Manjari:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}