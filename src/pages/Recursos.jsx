const recursosData = [
  {
    categoria: "Mentalidad y Filosofía de Vida",
    items: [
      {
        titulo: "David Goggins - No puedes lastimarme",
        desc: "Domina tu mente y desafía tus límites. Aprende a abrazar la incomodidad.",
        url: "https://www.youtube.com/results?search_query=david+goggins+espa%C3%B1ol",
      },
      {
        titulo: "Marcos Vázquez - Invicto",
        desc: "Estoicismo moderno aplicado al siglo XXI para fortalecer mente y cuerpo.",
        url: "https://www.youtube.com/results?search_query=marcos+vazquez+estoicismo",
      },
      {
        titulo: "Viktor Frankl - El hombre en busca de sentido",
        desc: "La resiliencia extrema y cómo encontrar propósito incluso en el mayor de los infiernos.",
        url: "https://www.youtube.com/results?search_query=el+hombre+en+busca+de+sentido+audiolibro",
      },
    ],
  },
  {
    categoria: "Hábitos y Acción Diaria",
    items: [
      {
        titulo: "James Clear - Hábitos Atómicos",
        desc: "El sistema definitivo para crear buenos hábitos y romper los malos aplicando la regla del 1%.",
        url: "https://www.youtube.com/results?search_query=habitos+atomicos+resumen",
      },
      {
        titulo: "Brian Tracy - Tráguese ese sapo",
        desc: "Acaba con la procrastinación. Ataca la tarea más difícil a primera hora de la mañana.",
        url: "https://www.youtube.com/results?search_query=traguese+ese+sapo+audiolibro",
      },
      {
        titulo: "Stephen Covey - Los 7 hábitos",
        desc: "Liderazgo personal, efectividad y cómo tomar las riendas de tus decisiones diarias.",
        url: "https://www.youtube.com/results?search_query=los+7+habitos+de+la+gente+altamente+efectiva+resumen",
      },
    ],
  },
  {
    categoria: "Los Clásicos del Éxito",
    items: [
      {
        titulo: "Dale Carnegie - Cómo ganar amigos",
        desc: "La obra maestra sobre inteligencia social, empatía y comunicación efectiva.",
        url: "https://www.youtube.com/results?search_query=como+ganar+amigos+e+influir+sobre+las+personas+audiolibro",
      },
      {
        titulo: "Napoleon Hill - Piense y hágase rico",
        desc: "El libro pionero sobre la mentalidad de abundancia y el enfoque obsesivo hacia una meta.",
        url: "https://www.youtube.com/results?search_query=piense+y+hagase+rico+audiolibro",
      },
      {
        titulo: "Wayne Dyer - El poder de la intención",
        desc: "Cambia la forma en que ves el mundo y el mundo que ves cambiará.",
        url: "https://www.youtube.com/results?search_query=wayne+dyer+el+poder+de+la+intencion+espa%C3%B1ol",
      },
    ],
  },
  {
    categoria: "Emociones y Crecimiento Interior",
    items: [
      {
        titulo: "Marian Rojas Estapé - Encuentra tu persona vitamina",
        desc: "Neurociencia pura aplicada a la gestión emocional, el cortisol y el bienestar mental.",
        url: "https://www.youtube.com/results?search_query=marian+rojas+estape+conferencias",
      },
      {
        titulo: "Joe Dispenza - Deja de ser tú",
        desc: "Comprende cómo tu cerebro crea tus bucles y cómo reprogramarlo para una nueva realidad.",
        url: "https://www.youtube.com/results?search_query=joe+dispenza+deja+de+ser+tu+espa%C3%B1ol",
      },
      {
        titulo: "Tony Robbins - Despertando al gigante interior",
        desc: "Motivación de alto impacto. Toma el control inmediato de tu destino mental y físico.",
        url: "https://www.youtube.com/results?search_query=tony+robbins+espa%C3%B1ol",
      },
      {
        titulo: "Eckhart Tolle y Brené Brown",
        desc: "Mindfulness para vivir el presente (Tolle) y la fuerza oculta de la vulnerabilidad (Brown).",
        url: "https://www.youtube.com/results?search_query=eckhart+tolle+brene+brown+espa%C3%B1ol",
      },
    ],
  },

  {
    categoria: "Nutricion y Cuidado Físico",
    items: [
      {
        titulo: "Dr. Jason Fung - El código de la obesidad",
        desc: "Una mirada revolucionaria sobre la obesidad, el ayuno intermitente y la insulina.",
        url: "https://www.youtube.com/results?search_query=dr+jason+fung+el+c%C3%B3digo+de+la+obesidad",
      },
    ],
  },
];

export default function Recursos() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="mb-4 text-3xl font-bold text-texto md:text-5xl">
          El <span className="text-principal">Armero</span>
        </h1>
        <p className="mx-auto max-w-2xl text-gray-600">
          Todo lo que necesitas para empezar. Sin excusas, sin costes ocultos.
          Solo herramientas probadas.
        </p>
      </header>

      <div className="grid gap-12">
        {recursosData.map((bloque, index) => (
          <div key={index}>
            <h2 className="mb-6 text-2xl font-bold text-texto border-b-2 border-secundario inline-block pb-1">
              {bloque.categoria}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bloque.items.map((recurso, idx) => (
                <a
                  key={idx}
                  href={recurso.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-principal hover:shadow-md focus:outline-none focus:ring-2 focus:ring-principal"
                  aria-label={`Abrir recurso: ${recurso.titulo}`}
                >
                  <div>
                    <h3 className="mb-2 font-bold text-texto group-hover:text-principal transition-colors">
                      {recurso.titulo}
                    </h3>
                    <p className="text-sm text-gray-600">{recurso.desc}</p>
                  </div>
                  <span
                    className="mt-4 text-sm font-medium text-principal"
                    aria-hidden="true"
                  >
                    Abrir enlace ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
