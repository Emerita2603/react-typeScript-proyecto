"use client"; // 👈 importante para habilitar interactividad

import { useState } from "react";

interface FilterBarProps {
  categorias: string[];
  onFilter: (texto: string, categoria: string) => void;
}

export default function FilterBar({ categorias, onFilter }: FilterBarProps) {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleFilter = () => {
    onFilter(texto, categoria);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
      {/* 🔍 Buscador */}
      <input
        type="text"
        placeholder="Buscar animal..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="border rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      {/* 🐾 Selector de categoría */}
      <select
        value={categoria}
        onChange={(e) => setCategoria(e.target.value)}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <option value="">Todas las categorías</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* 🔘 Botón de filtro */}
      <button
        onClick={handleFilter}
        className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
      >
        Filtrar
      </button>
    </div>
  );
}
