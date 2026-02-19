export default function Progress() {
  const fechaInicio = new Date("2023-03-01"); 
  const hoy = new Date();

  // Calculamos los días en marcha desde la fecha de inicio hasta hoy
  const diasEnMarcha = Math.floor((hoy - fechaInicio) / (1000 * 60 * 60 * 24));

  // Mis pilares estáticos. Mi identidad.
  const pilares = [
    {
      label: "Días en Marcha",
      valor: diasEnMarcha,
      desc: "Sumando el 1% sin excusas.",
      icono: "🔥",
    },
    {
      label: "Foco Actual",
      valor: "React & UI",
      desc: "Objetivo: Frontend Developer.",
      icono: "💻",
    },
    {
      label: "Disciplina",
      valor: "Trail Running",
      desc: "La montaña dicta el ritmo.",
      icono: "🏔️",
    },
    {
      label: "Propósito",
      valor: "Familia",
      desc: "Construyendo el futuro paso a paso.",
      icono: "🌳",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 border-t border-gray-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight text-texto">
              Mis <span className="text-principal">Pilares</span>
            </h2>
            <p className="text-sm text-gray-500">
              Reglas fijas. Cero negociaciones con mi mente.
            </p>
          </div>
          <div className="h-px w-full bg-gray-100 md:w-1/3"></div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-gray-50/50 p-6 transition-all hover:border-principal/30 hover:bg-white hover:shadow-sm"
            >
              <div className="mb-4 text-2xl grayscale group-hover:grayscale-0 transition-all">
                {pilar.icono}
              </div>
              <div className="text-3xl font-black text-texto group-hover:text-principal transition-colors">
                {pilar.valor}
              </div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-wider mt-1">
                {pilar.label}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-gray-500">
                <span className="h-1.5 w-1.5 rounded-full bg-principal"></span>
                {pilar.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
