"use client";

export default function CulturaPage() {
  return (
    <main
      className="relative min-h-screen text-white p-10 bg-fixed"
      style={{
        backgroundImage: "url('/imagenes/trompetero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa para legibilidad */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-400 mb-4 drop-shadow-lg">
            🌿 Cultura de Trompeteros
          </h1>
          <p className="max-w-3xl mx-auto text-gray-100 leading-relaxed text-lg">
            En el distrito de Trompeteros, la cultura es una mezcla viva de tradiciones
            ancestrales amazónicas y costumbres modernas. Las comunidades Achuar,
            Candoshi y Urarina mantienen su lengua, danzas y ceremonias ligadas a la
            naturaleza y los ríos. Aquí podrás conocer sus festividades, su arte, su
            gastronomía y su forma de convivencia sostenible.
          </p>
        </section>

        {/* Galería cultural */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/imagenes/lugares/atardecer.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-bold text-yellow-400">Fiesta de San Juan</h2>
              <p className="text-sm text-gray-200">
                Celebrada en toda la Amazonía peruana, incluyendo Loreto, el 24 de junio. Se honra al patrón de la selva con danzas, música y el tradicional juane.
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/imagenes/lugares/inicio.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-bold text-green-400">Semana Santa</h2>
              <p className="text-sm text-gray-200">
                con procesiones y platos típicos de la región, y la Fiesta de la Inmaculada Concepción en Punchana.
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/imagenes/lugares/rio.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-bold text-cyan-400">Aniversario del distrito</h2>
              <p className="text-sm text-gray-200">
                El 18 de junio se celebra el aniversario del Distrito de Trompeteros, en la provincia de Loreto, región Loreto, Perú, ya que fue creado el 18 de junio de 1987. En 2025, se cumplen 38 años de su creación política. 
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
