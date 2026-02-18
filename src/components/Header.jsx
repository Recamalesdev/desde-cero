import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Esta función comprueba si estas en la ruta actual para pintar el enlace de otro color
  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-texto focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2 rounded"
        >
          Desde Cero.
        </Link>

        <nav aria-label="Navegación principal">
          <ul className="flex items-center gap-4 md:gap-8 text-sm md:text-base">
            <li>
              <Link
                to="/"
                className={`font-medium transition-colors rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-principal ${
                  isActive("/")
                    ? " text-principal"
                    : "text-gray-600 hover:text-principal"
                }`}
              >
                Inicio
              </Link>
            </li>

            <li>
              <Link
                to="/recursos"
                className={`font-medium transition-colors rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-principal ${
                  isActive("/recursos")
                    ? "text-principal"
                    : "text-gray-600 hover:text-principal"
                }`}
              >
                Recursos
              </Link>
            </li>

            <li>
              <a
                href="mailto:bernardorecamalesgt@gmail.com"
                target="_blank"
                className="hidden rounded-md bg-principal px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2 md:block"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
