export default function PinshaPage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-4">
        Pinsha (Ramphastos toco)
      </h1>
      <p className="text-gray-300 leading-relaxed">
        La pinsha o tucán toco es un ave tropical de pico grande y colorido.
        Juega un papel importante en la dispersión de semillas de la selva amazónica.
      </p>
      <a
        href="https://es.wikipedia.org/wiki/Ramphastos_toco"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 mt-6 inline-block hover:underline"
      >
        Leer más en Wikipedia →
      </a>
    </main>
  );
}
