"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Animal } from "@/types/animal";

interface Props {
  animal: Animal;
}

export default function AnimalCard({ animal }: Props) {
  const src = animal.imagen || "/imagenes/placeholder.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
    >
      <div className="relative w-full h-56">
        <Image
          src={src}
          alt={animal.nombre}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold text-green-700">{animal.nombre}</h2>
        <p className="italic text-gray-500">{animal.nombre_cientifico}</p>
        <p className="text-gray-700 mt-2 line-clamp-3">{animal.descripcion}</p>
        <p className="text-sm text-gray-500 mt-3">
          🐾 <strong>{animal.categoria}</strong>
        </p>

        <Link
          href={`/animales/${animal.id}`}
          className="text-green-700 font-semibold hover:underline mt-3 inline-block"
        >
          Ver más →
        </Link>
      </div>
    </motion.div>
  );
}
