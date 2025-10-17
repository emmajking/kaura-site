import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { Nav } from "@/components/Nav";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

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
  description: "Present, but silent.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://lamaisonkaura.com",
    siteName: "La Maison Kaura",
    title: "La Maison Kaura — Your Pinnacle Care Spaces",
    description: "A rare, silent, and sovereign signature. Where luxury becomes an art.",
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
    description: "A rare, silent, and sovereign signature. Where luxury becomes an art.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-black text-white">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen bg-kaura-bg text-kaura-text`}
      >
        {/* NAVIGATION */}
        <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-black/70">
          <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <Nav />
          </div>
        </header>

        {/* PAGE CONTENT + TRANSITIONS */}
        <PageTransition>
          <main className="max-w-5xl mx-auto px-4 pb-24 pt-10">
            {children}
          </main>
        </PageTransition>

        {/* FOOTER */}
        <footer className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 py-8 text-xs opacity-70 text-center">
            © {new Date().getFullYear()} La Maison Kaura — Present, but silent.
          </div>
        </footer>

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
                "Présente, mais silencieuse. Services résidentiels ultra-luxe, sur invitation.",
            }),
          }}
        />
      </body>
    </html>
  );
}
