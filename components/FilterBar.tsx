"use client";

import { useState } from "react";

interface Props {
  categorias: string[];
  onFilter: (texto: string, categoria: string) => void;
}

export default function FilterBar({ categorias, onFilter }: Props) {
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center mb-6">
      

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => {
            setCategoria("");
            onFilter(texto, "");
          }}
          className={`px-4 py-2 rounded-full ${
            categoria === ""
              ? "bg-green-500 text-black font-semibold"
              : "bg-[#0e2b1c] text-gray-300 border border-green-800"
          }`}
        >
          Todos
        </button>

        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategoria(cat);
              onFilter(texto, cat);
            }}
            className={`px-4 py-2 rounded-full ${
              categoria === cat
                ? "bg-green-500 text-black font-semibold"
                : "bg-[#0e2b1c] text-gray-300 border border-green-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
