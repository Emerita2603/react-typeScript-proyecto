"use client";
import Image from "next/image";
import Link from "next/link";
import { Animal } from "@/types/animal";

interface Props {
  animal: Animal;
}

export default function AnimalCard({ animal }: Props) {
  return (
    <div className="bg-[#0e2b1c] rounded-xl shadow-md overflow-hidden hover:shadow-lg border border-green-900 transition">
      <div className="relative w-full h-56">
        <Image
          src={animal.imagen}
          alt={animal.nombre}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-green-400 font-bold text-lg">{animal.nombre}</h2>
        <p className="italic text-gray-400">{animal.nombre_cientifico}</p>
        <p className="text-gray-300 text-sm mt-2">{animal.descripcion}</p>

        <Link
          href={`/animales/${animal.id}`}
          className="text-green-500 font-semibold hover:underline mt-3 inline-block"
        >
          Ver más →
        </Link>
      </div>
    </div>
  );
}
