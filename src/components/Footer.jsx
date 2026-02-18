export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 text-center md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="mb-2 text-2xl font-bold text-texto tracking-tight">
          Desde Cero.
        </h3>
        <p className="mb-8 text-sm text-gray-500">
          Construyendo una vida mejor, un hábito a la vez.
        </p>

        {/* Bloque de Contacto */}
        <div className="mx-auto mb-8 max-w-md rounded-xl bg-gray-50 p-6 border border-gray-100">
          <p className="mb-3 text-sm font-semibold text-gray-700">
            ¿Quieres aportar recursos o contactar conmigo?
          </p>

          <a
            href="mailto:bernardorecamalesgt@gmail.com"
            target="_blank"
            className="inline-block rounded-lg bg-principal px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2"
          >
            Escríbeme un Email
          </a>

          <p className="mt-3 text-xs text-gray-500">
            o copia mi dirección:{" "}
            <span className="font-mono text-gray-700 select-all">
              bernardorecamalesgt@gmail.com
            </span>
          </p>
        </div>

        {/* Enlaces Sociales */}
        <div className="mb-8 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/bernardo-recamales-guti%C3%A9rrez-13b87a2a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-principal transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Recamalesdev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-principal transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com/bernardo.recamales.trail/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 hover:text-principal transition-colors"
          >
            Instagram
          </a>
        </div>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Bernardo Recamales. Desarrollado con
          disciplina, React & Tailwind.
        </p>
      </div>
    </footer>
  );
}
