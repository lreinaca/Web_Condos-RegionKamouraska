"use client";
import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Contact & Réservations</h1>
        <p className="p mb-8 max-w-2xl">Dites-nous vos dates et le nombre de personnes. Nous vous répondrons avec les disponibilités et la confirmation. Nous pouvons également intégrer un système de réservation plus tard.</p>

        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="bg-white p-6 rounded-lg border"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("Merci, nous vous contacterons bientôt.");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Nom" className="border rounded-md p-3" />
              <input required type="email" placeholder="Courriel" className="border rounded-md p-3" />
              <input placeholder="Téléphone" className="border rounded-md p-3 sm:col-span-2" />
              <div className="grid grid-cols-2 gap-3 sm:col-span-2">
                <input type="date" className="border rounded-md p-3" />
                <input type="date" className="border rounded-md p-3" />
              </div>
              <select className="border rounded-md p-3 sm:col-span-2">
                <option>2 personnes</option>
                <option>3 personnes</option>
                <option>4 personnes</option>
              </select>
              <textarea placeholder="Message" className="border rounded-md p-3 sm:col-span-2" rows={5} />
            </div>
            <button className="btn mt-4">Envoyer</button>
            {status && <p className="text-forest-700 mt-3">{status}</p>}
          </form>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="h3 mb-2">Contact</h3>
              <p className="text-gray-700">Courriel : hola@chalets-kamouraska.com</p>
              <p className="text-gray-700">Kamouraska, Québec</p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border">
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
