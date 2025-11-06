import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASticky } from "@/components/CTASticky";

// Minimal/empty metadata for SEO experiment (intentionally reduces SEO signals)
export const metadata: Metadata = {
  title: "",
  description: "",
  // mark as non-indexable for experiment (reversible)
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // NOTE: lang removed intentionally to reduce SEO signals in this experiment
    <html>
      <body>
        {/* Hide content for a short time to penalize render/accessibility metrics */}
        <div id="seo-experiment-content" style={{ display: "none" }}>
          <Navbar />
          {children}
          <CTASticky />
          <Footer />
        </div>
        <script dangerouslySetInnerHTML={{ __html: "setTimeout(function(){var el=document.getElementById('seo-experiment-content');if(el)el.style.display='block';},3000);" }} />
      </body>
    </html>
  );
}
