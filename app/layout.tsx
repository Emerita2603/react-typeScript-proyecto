import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TrompeteroCity",
  description: "Explora la biodiversidad de la Amazonía peruana 🌿",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0F1F17] text-white`}>
        {/* 🔹 Navbar */}
        <nav className="bg-[#0F1F17] border-b border-green-900 text-white px-8 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">🌿</span>
              <span className="font-semibold text-lg">TrompeteroCity</span>
            </Link>

            {/* Menú */}
            <div className="flex gap-6 text-sm">
              <Link href="/animales" className="hover:text-green-400 font-medium">
                Fauna
              </Link>
              <Link href="/flora" className="hover:text-green-400">
                Flora
              </Link>
              <Link href="/ecosistemas" className="hover:text-green-400">
                Ecosystems
              </Link>
              <Link href="/about" className="hover:text-green-400">
                About Us
              </Link>
            </div>
          </div>
        </nav>

        {/* Contenido dinámico */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm py-6 border-t border-green-900">
          © {new Date().getFullYear()} TrompeteroCity — Proyecto educativo 🌎
        </footer>
      </body>
    </html>
  );
}
