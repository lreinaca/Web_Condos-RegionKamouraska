export default function NosotrosPage() {
  return (
    <main className="section">
      <div className="safe-max">
        <h1 className="h2 mb-2">Nosotros</h1>
        <p className="p max-w-3xl">Cuidamos cada detalle para ofrecer una experiencia íntima y consciente. Trabajamos con materiales nobles y proveedores locales, promoviendo un turismo responsable que protege el entorno natural de Kamouraska.</p>
        <div className="grid sm:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Misión</h3>
            <p className="text-gray-700">Crear espacios de calma para reconectar con la naturaleza, con hospitalidad cálida y diseño honesto.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="h3 mb-2">Visión</h3>
            <p className="text-gray-700">Ser un referente de escapadas boutique sostenibles en la región, inspirando cuidado y bienestar.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
