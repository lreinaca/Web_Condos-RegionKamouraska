import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASticky } from "@/components/CTASticky";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Chalets Kamouraska | Nature, calme et confort",
  description:
    "Escapades boutique à Kamouraska, Québec. Chalets et condos avec vue, nature et repos.",
  verification: {
    google: "XD3QfLHe1fHWGMs7GNLaOBkBIFEA9mAb0tg-rTzQl2M"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA">
      <head>
        {/* Primary metadata & social */}
        <link rel="canonical" href="https://condos-region-kamouraska.pages.dev/" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />

        <meta property="og:title" content="Chalets Kamouraska | Nature, calme et confort" />
        <meta property="og:description" content="Escapades boutique à Kamouraska, Québec. Chalets et condos avec vue, nature et repos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://condos-region-kamouraska.pages.dev/" />
        <meta property="og:image" content="/images/cabain.JPG" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chalets Kamouraska | Nature, calme et confort" />
        <meta name="twitter:description" content="Escapades boutique à Kamouraska, Québec. Chalets et condos avec vue, nature et repos." />
        <meta name="twitter:image" content="/images/cabain.JPG" />

        {/* JSON-LD structured data: LodgingBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Chalets Kamouraska",
              "url": "https://condos-region-kamouraska.pages.dev/",
              "logo": "https://condos-region-kamouraska.pages.dev/images/cabain.JPG",
              "description": "Escapades boutique à Kamouraska, Québec. Chalets et condos avec vue, nature et repos.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kamouraska",
                "addressRegion": "QC",
                "addressCountry": "CA"
              }
            })
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-TT5QD6M8');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) - fallback for users with JS disabled */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TT5QD6M8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <CTASticky />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
