import faunaData from "@/data/fauna.json";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

export default function AnimalDetailPage({ params }: Props) {
  const animal = faunaData.find((a) => a.id === params.id);

  if (!animal) {
    return (
      <main className="max-w-3xl mx-auto p-8 text-center">
        <h1 className="text-2xl font-bold text-red-500">Animal no encontrado 🐾</h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <div className="relative w-full h-80 mb-6">
        <Image
          src={animal.imagen}
          alt={animal.nombre}
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>

      <h1 className="text-4xl font-bold text-green-500 mb-2">{animal.nombre}</h1>
      <p className="italic text-gray-400 mb-4">{animal.nombre_cientifico}</p>
      <p className="text-gray-200 leading-relaxed">{animal.descripcion}</p>

      <p className="text-sm text-gray-400 mt-6">
        Categoría: <span className="text-green-400">{animal.categoria}</span>
      </p>
    </main>
  );
}
