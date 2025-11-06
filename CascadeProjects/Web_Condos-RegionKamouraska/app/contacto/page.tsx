"use client";
import { useState } from "react";

export default function ContactoPage() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Contacto & Reservas</h1>
        <p className="p mb-8 max-w-2xl">Cuéntanos fechas y número de huéspedes. Te responderemos con disponibilidad y confirmación. También podemos integrar un sistema de reservas más adelante.</p>

        <div className="grid gap-8 lg:grid-cols-2">
          <form
            className="bg-white p-6 rounded-lg border"
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("Gracias, te contactaremos a la brevedad.");
            }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Nombre" className="border rounded-md p-3" />
              <input required type="email" placeholder="Email" className="border rounded-md p-3" />
              <input placeholder="Teléfono" className="border rounded-md p-3 sm:col-span-2" />
              <div className="grid grid-cols-2 gap-3 sm:col-span-2">
                <input type="date" className="border rounded-md p-3" />
                <input type="date" className="border rounded-md p-3" />
              </div>
              <select className="border rounded-md p-3 sm:col-span-2">
                <option>2 huéspedes</option>
                <option>3 huéspedes</option>
                <option>4 huéspedes</option>
              </select>
              <textarea placeholder="Mensaje" className="border rounded-md p-3 sm:col-span-2" rows={5} />
            </div>
            <button className="btn mt-4">Enviar</button>
            {status && <p className="text-forest-700 mt-3">{status}</p>}
          </form>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="h3 mb-2">Contacto</h3>
              <p className="text-gray-700">Email: hola@cabanas-kamouraska.com</p>
              <p className="text-gray-700">Kamouraska, Quebec</p>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border">
              <iframe
                title="Mapa Kamouraska"
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
