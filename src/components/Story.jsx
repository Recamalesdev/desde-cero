export default function Story() {
  return (
    <section className="bg-white px-6 py-20 md:py-32 border-t border-gray-100">
      <div className="mx-auto max-w-4xl">
        
        <h2 className="mb-10 text-center text-3xl font-black uppercase tracking-tight text-texto md:text-5xl">
          Mi <span className="text-principal">Historia</span>
        </h2>

        {/* 1. LA NARRATIVA (Storytelling ajustado a tu realidad) */}
        <div className="mb-16 space-y-6 text-lg leading-relaxed text-gray-700 border-l-4 border-principal pl-4 md:pl-6 mx-auto max-w-3xl">
          <p>
            Me llamo Bernardo. Tengo 38 años y mi historia se ha escrito con el sudor de los trabajos más duros: el campo, la construcción y los almacenes. Durante mucho tiempo, mi vida fue una rueda que no dejaba de girar pero que no avanzaba ni un metro. Vivía en piloto automático, dejando que los días se escurrieran entre el tabaco, el alcohol y una falta total de propósito.
          </p>
          <p>
            El verdadero "clic" llegó mientras trabajaba como repartidor en un almacén. Allí, entre paquetes y rutas, entendí que si no tomaba el mando de mi destino, pasaría el resto de mis días cargando el peso de otros en lugar de construir el mío propio. El motor de mi cambio fueron mis dos hijas y una pareja que vio en mí lo que yo aún no me atrevía a ver.
          </p>
          <p>
            Decidí cortar con todo lo que me apagaba. Cambié el humo por el oxígeno y encontré en el Trail Running mi mayor maestro de disciplina. La montaña me enseñó que la cima no se alcanza con suerte, sino con pasos constantes. Apliqué esa regla del 1% a todo: madrugones a las 6:00 a.m., lectura de mentalidad y sesiones de Trabajo Profundo para formarme como desarrollador Frontend.
          </p>
          <p className="font-semibold text-gray-900">
            Hoy trabajo a turnos en una fábrica, pero mi mente ya está en otro lugar. Mi objetivo es la libertad, el trabajo remoto y una casa para mi familia. No busco ser perfecto, solo busco ser un hombre en marcha. Si yo pude salir de ese bucle, tú también puedes empezar desde cero.
          </p>
        </div>

        {/* 2. EL IMPACTO VISUAL (La transformación estructurada) */}
        <div className="grid gap-8 md:grid-cols-2 mt-12">
          
          {/* Bloque 1: El Freno (El Pasado) */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-all hover:border-gray-300">
            <h3 className="mb-6 text-xl font-bold text-secundario border-b-2 border-gray-200 pb-2">
              Piloto Automático
            </h3>
            <ul className="space-y-5 text-gray-600 font-medium text-base">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5">✕</span> 
                <span>Años de esfuerzo físico en campo, obra y reparto sin dirección propia.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5">✕</span> 
                <span>Hábitos que drenaban mi energía (tabaco y alcohol).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-0.5">✕</span> 
                <span>Sobreviviendo al día a día, sin hábitos ni cuidado personal.</span>
              </li>
            </ul>
          </div>

          {/* Bloque 2: En Marcha (El Presente) */}
          <div className="relative overflow-hidden rounded-2xl border border-orange-200 bg-orange-50/30 p-8 shadow-sm transition-all hover:border-principal">
            <div className="absolute right-0 top-0 rounded-bl-lg bg-principal px-4 py-1 text-xs font-bold text-white tracking-widest">
              HOY
            </div>
            
            <h3 className="mb-6 text-xl font-bold text-texto border-b-2 border-principal pb-2">
              En Marcha
            </h3>
            <ul className="space-y-5 text-gray-800 font-semibold text-base">
              <li className="flex items-start gap-3">
                <span className="text-principal mt-0.5">✓</span> 
                <span>Estudio diario de código React (La regla del 1%).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-principal mt-0.5">✓</span> 
                <span>Planificación física estricta y carreras de Trail Running.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-principal mt-0.5">✓</span> 
                <span>Foco en activos financieros y libertad de tiempo.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}