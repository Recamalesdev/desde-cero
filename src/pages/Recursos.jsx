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
      <header className="mb-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-texto md:text-5xl">
          El <span className="text-principal">Sistema</span>
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          No es una lista de libros. Es un mapa de transformación estructurado.
          No te saltes pasos.
        </p>
      </header>

      <div className="grid gap-16">
        {sistemaData.map((bloque, index) => (
          <div key={index} className="relative">
            {/* Cabecera del Nivel */}
            <div className="mb-8">
              <h2 className="text-2xl font-black text-texto uppercase tracking-wide">
                {bloque.nivel}
              </h2>
              <p className="mt-2 text-gray-600 border-l-2 border-principal pl-3">
                {bloque.descripcion}
              </p>
            </div>

            {/* Grid de Tarjetas de Acción */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {bloque.items.map((recurso, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-principal transition-colors"
                >
                  <div>
                    {/* Etiqueta de Tiempo/Formato */}
                    <span className="inline-block px-2 py-1 mb-4 text-xs font-bold text-secundario bg-gray-100 rounded">
                      ⏱ {recurso.tiempo}
                    </span>

                    <h3 className="mb-3 text-lg font-bold text-texto">
                      {recurso.titulo}
                    </h3>

                    {/* El Diagnóstico */}
                    <p className="text-sm font-medium text-gray-700 bg-orange-50/50 p-3 rounded-lg border border-orange-100">
                      {recurso.diagnostico}
                    </p>
                  </div>

                  {/* Botón de Acción Claro */}
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
