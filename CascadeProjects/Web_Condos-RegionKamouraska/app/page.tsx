import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Carousel } from "@/components/Carousel";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <section className="section">
        <div className="safe-max">
          <Benefits />
        </div>
      </section>
      <section className="section bg-white">
        <div className="safe-max">
          <h2 className="h2 mb-6">Cartes postales de Kamouraska</h2>
          <p className="p mb-8 max-w-2xl">Nature, fleuve et ciel ouvert. Une sélection d'images pour vous inspirer avant votre escapade.</p>
          <Carousel />
        </div>
      </section>
      <section className="section">
        <div className="safe-max">
          <Testimonials />
        </div>
      </section>
    </main>
  );
}
