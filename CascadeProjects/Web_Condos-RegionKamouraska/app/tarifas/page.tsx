export default function TarifasPage() {
  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Tarifs & Politiques</h1>
        <p className="p mb-8 max-w-2xl">Tarifs par saison et règles pour un séjour agréable. Les prix peuvent varier selon la disponibilité et la demande.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg overflow-hidden">
            <thead className="bg-sand-100">
              <tr>
                <th className="text-left p-4">Saison</th>
                <th className="text-left p-4">Chalet Rivière</th>
                <th className="text-left p-4">Condo Forêt</th>
                <th className="text-left p-4">Chalet Horizon</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-4">Basse (nov-mar)</td>
                <td className="p-4">140 $</td>
                <td className="p-4">170 $</td>
                <td className="p-4">150 $</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Moyenne (avr-jun, sep-oct)</td>
                <td className="p-4">160 $</td>
                <td className="p-4">190 $</td>
                <td className="p-4">170 $</td>
              </tr>
              <tr className="border-t">
                <td className="p-4">Haute (jul-août)</td>
                <td className="p-4">190 $</td>
                <td className="p-4">220 $</td>
                <td className="p-4">200 $</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-10">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Politiques de réservation</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Un dépôt de 30 % est requis pour confirmer</li>
              <li>Annulation gratuite jusqu'à 7 jours avant</li>
              <li>Aucune fête ni événement autorisé</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Arrivée / Départ</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Arrivée : 16h00</li>
              <li>Départ : 11h00</li>
              <li>Départ tardif sous réserve de disponibilité</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
