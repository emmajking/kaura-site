import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * ==== SEO / OPEN GRAPH ====
 * Pense à placer dans /public :
 * - /og.jpg (1200x630)
 * - /favicon.ico
 * - /logo.png (pour JSON-LD)
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://lamaisonkaura.com"),
  title: "La Maison Kaura — Your Pinnacle Care Spaces",
  description:
    "Présente, mais silencieuse. Services résidentiels ultra-luxe, sur invitation.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://lamaisonkaura.com",
    siteName: "La Maison Kaura",
    title: "La Maison Kaura — Your Pinnacle Care Spaces",
    description:
      "A rare, silent, and sovereign signature. Where luxury becomes an art.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "La Maison Kaura",
      },
    ],
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Maison Kaura — Your Pinnacle Care Spaces",
    description:
      "A rare, silent, and sovereign signature. Where luxury becomes an art.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        {/* JSON-LD Organization (aide Google à comprendre la marque) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "La Maison Kaura",
              url: "https://lamaisonkaura.com",
              logo: "https://lamaisonkaura.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/la-maison-kaura" // ajoute quand prêt
              ],
              description:
                "Présente, mais silencieuse. Services résidentiels ultra-luxe, sur invitation."
            }),
          }}
        />
      </body>
    </html>
  );
}
