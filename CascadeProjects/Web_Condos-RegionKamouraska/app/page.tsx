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
      <section className="section bg-sand-50">
        <div className="safe-max">
          <h2 className="h2 mb-10 text-center">Nos avantages</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="h3 mb-3">Emplacement exceptionnel</h3>
              <p className="text-gray-700">Au bord du Lac Saint-Pierre, offrant calme, nature et vues apaisantes à quelques minutes de Kamouraska.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="h3 mb-3">Condos confortables</h3>
              <p className="text-gray-700">Entièrement équipés, parfaits pour les séjours en couple, en famille ou entre amis.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest-600">
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                </svg>
              </div>
              <h3 className="h3 mb-3">Activités de plein air</h3>
              <p className="text-gray-700">Accès direct au kayak, au canot et aux promenades au bord de l'eau, pour une expérience authentique et ressourçante.</p>
            </div>
          </div>
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
