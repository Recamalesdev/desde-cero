// 1. La Base de Datos convertida en un Sistema de Niveles
const sistemaData = [
  {
    nivel: "Nivel 1: Fundamentos",
    descripcion:
      "Para quienes están perdidos, estancados o necesitan encender la chispa.",
    items: [
      {
        titulo: "David Goggins - No puedes lastimarme",
        diagnostico:
          "👉 Empieza aquí si: Tu mente siempre busca excusas para abandonar cuando las cosas se ponen difíciles.",
        tiempo: "Audiolibro / 11h",
        url: "https://www.youtube.com/results?search_query=david+goggins+espa%C3%B1ol",
      },
      {
        titulo: "Marian Rojas - Encuentra tu persona vitamina",
        diagnostico:
          "👉 Empieza aquí si: Sientes estrés constante y necesitas entender cómo tu entorno afecta a tu cortisol y energía.",
        tiempo: "Libro / 1 Semana",
        url: "https://www.youtube.com/results?search_query=marian+rojas+estape+conferencias",
      },
    ],
  },
  {
    nivel: "Nivel 2: Construcción",
    descripcion:
      "Para quienes ya han despertado y necesitan crear disciplina y sistemas.",
    items: [
      {
        titulo: "James Clear - Hábitos Atómicos",
        diagnostico:
          "👉 Empieza aquí si: Tienes motivación, pero tus rutinas duran solo tres días. Necesitas el sistema del 1%.",
        tiempo: "Libro / 2 Semanas",
        url: "https://www.youtube.com/results?search_query=habitos+atomicos+resumen",
      },
      {
        titulo: "Brian Tracy - Tráguese ese sapo",
        diagnostico:
          "👉 Empieza aquí si: Procrastinas lo importante y te pasas el día apagando fuegos sin avanzar en tus metas reales.",
        tiempo: "Audiolibro / 3h",
        url: "https://www.youtube.com/results?search_query=traguese+ese+sapo+audiolibro",
      },
    ],
  },
  {
    nivel: "Nivel 3: Expansión",
    descripcion:
      "Para quienes tienen disciplina y buscan filosofía, propósito y liderazgo.",
    items: [
      {
        titulo: "Viktor Frankl - El hombre en busca de sentido",
        diagnostico:
          "👉 Empieza aquí si: Tienes éxito en tus rutinas pero sientes un vacío de propósito a largo plazo.",
        tiempo: "Libro / 1 Semana",
        url: "https://www.youtube.com/results?search_query=el+hombre+en+busca+de+sentido+audiolibro",
      },
      {
        titulo: "Marcos Vázquez - Invicto",
        diagnostico:
          "👉 Empieza aquí si: Quieres blindar tu mente contra la frustración aplicando el estoicismo al siglo XXI.",
        tiempo: "Libro / 2 Semanas",
        url: "https://www.youtube.com/results?search_query=marcos+vazquez+estoicismo",
      },
    ],
  },
];

export default function Recursos() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-black text-texto md:text-5xl uppercase tracking-tight">
          El <span className="text-principal">Sistema</span>
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600 font-medium">
          No es una lista de libros. Es un mapa de transformación estructurado.
          No te saltes pasos.
        </p>
      </header>

      {/* Bloque de Acción Principal (Descarga del Mapa) */}
      <div className="mb-20 overflow-hidden rounded-2xl bg-zinc-900 p-8 text-white shadow-xl md:p-12 relative border border-zinc-800">
        {/* Destello decorativo de fondo simulando el "amanecer" */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-principal opacity-20 blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex-1">
            <span className="mb-4 inline-block rounded bg-principal px-3 py-1 text-xs font-black uppercase tracking-widest text-white shadow-sm">
              🚀 Paso 1 Obligatorio
            </span>
            <h2 className="mb-3 text-3xl font-black tracking-tight text-white md:text-4xl">
              El Mapa Desde Cero
            </h2>
            <p className="max-w-xl text-lg text-zinc-400 leading-relaxed">
              No empieces a leer a lo loco. Descarga gratis la hoja de ruta
              exacta en PDF con los{" "}
              <strong>primeros 30 días de tu reconstrucción</strong>. Hábitos,
              disciplina y foco.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href="/mapa-desde-cero.pdf"
              download="Mapa-Desde-Cero-Guia-Inicial.pdf"
              className="flex w-full items-center justify-center rounded-lg bg-principal px-8 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              Descargar Mapa Gratis ↓
            </a>
          </div>
        </div>
      </div>

      {/* Grid de Tarjetas de Acción (Niveles) */}
      <div className="grid gap-16">
        {sistemaData.map((bloque, index) => (
          <div key={index} className="relative">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-texto uppercase tracking-wide">
                {bloque.nivel}
              </h2>
              <p className="mt-2 text-gray-600 border-l-2 border-principal pl-3 font-medium">
                {bloque.descripcion}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {bloque.items.map((recurso, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-principal transition-all"
                >
                  <div>
                    <span className="inline-block px-2 py-1 mb-4 text-xs font-bold text-secundario bg-gray-100 rounded">
                      ⏱ {recurso.tiempo}
                    </span>
                    <h3 className="mb-3 text-lg font-bold text-texto">
                      {recurso.titulo}
                    </h3>
                    <p className="text-sm font-medium text-gray-700 bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                      {recurso.diagnostico}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href={recurso.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-principal hover:text-orange-700 transition-colors"
                    >
                      Iniciar este paso{" "}
                      <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
