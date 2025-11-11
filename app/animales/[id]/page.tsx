"use client";

import { motion } from "framer-motion";
import faunaData from "@/data/fauna.json";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Animal } from "@/types/animal";

interface AnimalPageProps {
  params: { id: string };
}

export default function AnimalPage({ params }: AnimalPageProps) {
  const animal = faunaData.find((a) => a.id === Number(params.id)) as Animal | undefined;
  if (!animal) notFound();

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-8"
    >
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="relative w-full md:w-1/2 h-72 md:h-96">
          <Image
            src={animal.imagen}
            alt={animal.nombre}
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold text-green-800 mb-2">{animal.nombre}</h1>
          <p className="italic text-gray-500 mb-4">{animal.nombre_cientifico}</p>
          <p className="text-gray-700 leading-relaxed mb-4">{animal.descripcion}</p>
          <p className="text-gray-600">
            🌿 <strong>Categoría:</strong> {animal.categoria}
          </p>
          <p className="text-gray-600 mt-2">
            🏞️ <strong>Hábitat:</strong> {animal.habitat || "Selva amazónica"}
          </p>

          <Link
            href="/animales"
            className="inline-block mt-6 text-blue-600 hover:underline font-semibold"
          >
            ← Volver al catálogo
          </Link>
        </div>
      </div>
    </motion.main>
  );
}
