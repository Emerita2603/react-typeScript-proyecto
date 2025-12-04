"use client";

import faunaData from "@/data/fauna.json";
import AnimalCard from "@/components/AnimalCard";
import FilterBar from "@/components/FilterBar";
import { useState } from "react";
import { Animal } from "@/types/animal";
import Link from "next/link";

export default function AnimalesPage() {
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
    <main
      className="relative min-h-screen text-white p-10 bg-fixed"
      style={{
        backgroundImage: "url('/imagenes/trompetero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Capa para contraste */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* 🌿 Sección informativa */}
        <section className="min-h-[50vh] flex flex-col justify-center items-center text-center mb-10">
          <h1 className="text-5xl font-bold text-green-400 mb-4">
            Nuestra Comunidad
          </h1>
          <p className="max-w-3xl text-gray-100 leading-relaxed text-lg">
            Villa Trompeteros es la capital del distrito de Trompeteros, en la
            provincia de Loreto, Perú. Se encuentra en la región nororiental del
            país, en plena selva amazónica, y se puede llegar a ella desde
            Iquitos. En esta página conocerás los lugares más representativos de
            la zona, sus actividades y su cultura. Está habitado por comunidades
            amerindias de los pueblos Achuar, Candoshi y Urarina.
          </p>

          {/* 🔗 Enlace debajo del texto principal */}
          <div className="mt-6">
            <Link
              href="/cultura"
              className="text-green-400 font-semibold text-lg hover:underline"
            >
              Ver Cultura →
            </Link>
          </div>
        </section>

        {/* 🏞️ Galería de lugares destacados */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 my-16">
          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/imagenes/lugares/plaza.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-bold text-yellow-400">
                Plaza Principal
              </h2>
              <p className="text-sm text-gray-200">
                Corazón de la comunidad, donde se realizan celebraciones locales
                y encuentros culturales.
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/imagenes/lugares/municipio.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-bold text-green-400">
                Municipalidad
              </h2>
              <p className="text-sm text-gray-200">
                Centro administrativo de Trompeteros, promotor de iniciativas
                ecológicas y culturales.
              </p>
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            style={{
              backgroundImage: "url('/imagenes/lugares/campo.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-0 p-6">
              <h2 className="text-2xl font-bold text-cyan-400">
                Campos Verdes
              </h2>
              <p className="text-sm text-gray-200">
                Espacios naturales donde se vive el día a día amazónico y se
                promueve el ecoturismo local.
              </p>
            </div>
          </div>
        </section>

        {/* 🐆 Sección de fauna */}
        <div className="bg-black/60 rounded-lg p-6 mt-12 backdrop-blur-md">
          <h1 className="text-4xl font-bold text-green-400 mb-4 text-center">
            🐆 Explora a través de esta página
          </h1>

          <p className="text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Lugares más conocidos del distrito de Villa Trompeteros, su
            cultura, su historia y sus comunidades.
          </p>

          <FilterBar categorias={categorias} onFilter={handleFilter} />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
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
        </div>
      </div>
    </main>
  );
}
