import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Amazónico",
  description: "Aprendiendo Next.js con TypeScript y TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* 🔹 Barra de navegación */}
        <nav className="bg-blue-700 text-white px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              🌿 TrompeteroCity
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="hover:underline">
                Publicaciones
              </Link>
              <Link href="/animales" className="hover:underline">
                Fauna Amazónica
              </Link>
            </div>
          </div>
        </nav>

        {/* 🔹 Contenido dinámico */}
        <main className="min-h-screen">{children}</main>

        {/* 🔹 Pie de página */}
        <footer className="bg-blue-900 text-white text-center py-4 mt-8">
          <p>© {new Date().getFullYear()} Amazonia Viva — Proyecto trompeterino 🌎</p>
        </footer>
      </body>
    </html>
  );
}
