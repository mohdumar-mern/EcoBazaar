import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RSLayout from "./(site)/(layouts)/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Eco Bazaar | Sustainable Shopping",
    template: "%s | Eco Bazaar",
  },
  description:
    "Eco Bazaar is your destination for eco-friendly and sustainable products. Shop smart, live green!",
  keywords: ["Eco Bazaar", "Sustainable", "Eco-friendly", "Shopping"],
  authors: [{ name: "Eco Bazaar Team" }],
  openGraph: {
    title: "Eco Bazaar | Sustainable Shopping",
    description:
      "Explore eco-friendly and sustainable products that make a difference.",
    url: "https://your-domain.com",
    siteName: "Eco Bazaar",
    images: [
      {
        url: "https://your-domain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eco Bazaar Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Bazaar | Sustainable Shopping",
    description:
      "Discover eco-friendly products for a better planet. Shop sustainably with Eco Bazaar.",
    images: ["https://your-domain.com/twitter-card.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RSLayout>{children}</RSLayout>
      </body>
    </html>
  );
}
