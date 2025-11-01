export default function TarifasPage() {
  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Tarifas & Políticas</h1>
        <p className="p mb-8 max-w-2xl">Tarifas por temporada y normas para una estadía agradable. Los precios pueden variar según disponibilidad y demanda.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg overflow-hidden">
            <thead className="bg-sand-100">
              <tr>
                <th className="text-left p-4">Temporada</th>
                <th className="text-left p-4">Cabaña Río</th>
                <th className="text-left p-4">Condo Bosque</th>
                <th className="text-left p-4">Cabaña Horizonte</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Baja (nov-mar)</td>
                <td className="p-4">$140</td>
                <td className="p-4">$170</td>
                <td className="p-4">$150</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Media (abr-jun, sep-oct)</td>
                <td className="p-4">$160</td>
                <td className="p-4">$190</td>
                <td className="p-4">$170</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Alta (jul-ago)</td>
                <td className="p-4">$190</td>
                <td className="p-4">$220</td>
                <td className="p-4">$200</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Políticas de reserva</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Se requiere 30% de depósito para confirmar</li>
              <li>Cancelación gratuita hasta 7 días antes</li>
              <li>No se admiten fiestas ni eventos</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Check-in / Check-out</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Check-in: 16:00</li>
              <li>Check-out: 11:00</li>
              <li>Late check-out sujeto a disponibilidad</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
