"use client";

import faunaData from "@/data/fauna.json";
import AnimalCard from "@/components/AnimalCard";
import FilterBar from "@/components/FilterBar";
import { useState } from "react";
import { Animal } from "@/types/animal";

export default function FaunaPage() {
  const fauna: Animal[] = faunaData;
  const categorias = [...new Set(fauna.map((a) => a.categoria))];

  const [animalesFiltrados, setAnimalesFiltrados] = useState<Animal[]>(fauna);

  const handleFilter = (texto: string, categoria: string) => {
    const resultado = fauna.filter((animal) => {
      const coincideTexto =
        animal.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        animal.nombre_cientifico.toLowerCase().includes(texto.toLowerCase());

      const coincideCategoria = categoria
        ? animal.categoria === categoria
        : true;

      return coincideTexto && coincideCategoria;
    });
    setAnimalesFiltrados(resultado);
  };

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-600">
        🐆 Fauna Amazónica
      </h1>

      <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Explora la biodiversidad amazónica. Usa el buscador o filtra por categoría para encontrar especies.
      </p>

      {/* Barra de filtros */}
      <FilterBar categorias={categorias} onFilter={handleFilter} />

      {/* Listado de animales */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {animalesFiltrados.length > 0 ? (
          animalesFiltrados.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No se encontraron resultados 🐢
          </p>
        )}
      </div>
    </main>
  );
}
