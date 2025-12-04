export default function FloraPage() {
  return (
    <main className="max-w-4xl mx-auto p-10 text-center text-white">
      <h1 className="text-4xl font-bold text-green-400 mb-4">🌿 Flora Amazónica</h1>
      <p className="text-gray-400 mb-6">
        Aquí podrás explorar plantas nativas y especies únicas de la Amazonía.
      </p>

      <a
        href="https://www.viveronortesur.com.pe/?gad_source=1&gad_campaignid=22871240119&gbraid=0AAAAA_WXP4mOH_hiI2W8ibJgyABr_AP3-&gclid=Cj0KCQiAoZDJBhC0ARIsAERP-F-swEOsp_kYPO0mH9AhvJ_eUTFicAd-G7CILZW7nB8xYS4UKyI3PBYaAojxEALw_wcB" // 🔗 ejemplo de API o sitio real
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-black font-semibold px-4 py-2 rounded-md hover:bg-green-400 transition"
      >
        Ver base de datos de plantas
      </a>
    </main>
  );
}
