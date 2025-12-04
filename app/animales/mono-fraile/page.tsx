export default function MonoFrailePage() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-500 mb-4">
        Mono fraile (Saimiri sciureus)
      </h1>
      <p className="text-gray-300 leading-relaxed">
        El mono fraile es un pequeño primate diurno de pelaje verdoso y rostro blanco.
        Vive en grupos grandes en los bosques tropicales del Amazonas.
      </p>
      <a
        href="https://es.wikipedia.org/wiki/Saimiri_sciureus"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-400 mt-6 inline-block hover:underline"
      >
        Leer más en Wikipedia →
      </a>
    </main>
  );
}
