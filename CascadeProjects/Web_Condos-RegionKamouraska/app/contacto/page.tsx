"use client";
import { useState } from "react";
import DatePicker from "@/components/DatePicker";
import GoogleCalendar from "@/components/GoogleCalendar";

export default function ContactoPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleWhatsAppReservation = () => {
    const phoneNumber = "15145551234"; // Reemplaza con tu número
    const message = selectedDate
      ? `Bonjour! Je souhaite réserver un chalet pour le ${selectedDate.toLocaleDateString("fr-CA")}. Pourriez-vous me confirmer la disponibilité?`
      : "Bonjour! Je souhaite réserver un chalet à Kamouraska. Pourriez-vous m'aider?";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Contact & Réservations</h1>
        <p className="p mb-8 max-w-2xl">Choisissez votre méthode de réservation préférée : formulaire, WhatsApp, ou Google Calendar.</p>

        {/* Opciones rápidas de reserva */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="bg-white p-6 rounded-lg border-2 border-green-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg cursor-pointer group animate-fade-in-up">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl">WhatsApp</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Réponse rapide et personnalisée</p>
            <button onClick={handleWhatsAppReservation} className="btn w-full">
              Réserver via WhatsApp
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg group animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl">Google Calendar</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Organisez votre séjour</p>
            <GoogleCalendar />
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-forest-200 hover:border-forest-500 transition-all duration-300 hover:shadow-lg group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl">Calendrier</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">Vérifiez les disponibilités</p>
            <button 
              onClick={() => setShowDatePicker(!showDatePicker)} 
              className="btn w-full"
            >
              {showDatePicker ? "Masquer" : "Voir"} le calendrier
            </button>
          </div>
        </div>

        {showDatePicker && (
          <div className="mb-12">
            <DatePicker 
              onDateSelect={(date) => setSelectedDate(date)} 
              selectedCondo="Chalet Kamouraska"
            />
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="bg-white p-6 rounded-lg border shadow-sm animate-fade-in-up"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("Merci, nous vous contacterons bientôt.");
            }}
          >
            <h2 className="font-display text-2xl mb-4">Formulaire de contact</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Nom" className="border rounded-md p-3 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition" />
              <input required type="email" placeholder="Courriel" className="border rounded-md p-3 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition" />
              <input placeholder="Téléphone" className="border rounded-md p-3 sm:col-span-2 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition" />
              <div className="grid grid-cols-2 gap-3 sm:col-span-2">
                <input type="date" className="border rounded-md p-3 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition" />
                <input type="date" className="border rounded-md p-3 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition" />
              </div>
              <select className="border rounded-md p-3 sm:col-span-2 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition">
                <option>2 personnes</option>
                <option>3 personnes</option>
                <option>4 personnes</option>
              </select>
              <textarea placeholder="Message" className="border rounded-md p-3 sm:col-span-2 focus:border-forest-500 focus:ring-2 focus:ring-forest-200 outline-none transition" rows={5} />
            </div>
            <button className="btn mt-4">Envoyer</button>
            {status && <p className="text-forest-700 mt-3 animate-fade-in-up">{status}</p>}
          </form>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border shadow-sm animate-fade-in-up">
              <h3 className="h3 mb-2">Contact Direct</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-700">hola@chalets-kamouraska.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-700">Kamouraska, Québec</p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <p className="text-gray-700">WhatsApp: +1 (514) 555-1234</p>
                </div>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border shadow-sm">
              <iframe
                title="Carte Kamouraska"
                width="100%"
                height="100%"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-70.17,47.54,-69.72,47.76&layer=mapnik"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
