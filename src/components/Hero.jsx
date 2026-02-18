import { Link } from 'react-router-dom';

// 1."Base de Datos" local de frases de alto impacto
const citas = [
  { texto: "No te detengas cuando estés cansado. Detente cuando hayas terminado.", autor: "David Goggins" },
  { texto: "Donde pones tu atención, pones tu energía.", autor: "Joe Dispenza" },
  { texto: "Cualquier cosa que la mente pueda concebir y creer, puede ser lograda.", autor: "Joseph Murphy" },
  { texto: "La tarea más difícil siempre debe ser la primera de la mañana.", autor: "Brian Tracy" },
  { texto: "Cambia la forma en que ves las cosas, y las cosas que ves cambiarán.", autor: "Wayne Dyer" },
  { texto: "El cambio más perdurable es el que se construye con el 1% de mejora diaria.", autor: "Robin Sharma" },
  { texto: "La disciplina pesa onzas, el arrepentimiento pesa toneladas.", autor: "Jim Rohn" }
];

// 2. Función para obtener la cita del día sin necesidad de servidores
const getFraseDelDia = () => {
  const hoy = new Date();
  // Calculamos el día del año (Ej: 15 de febrero es el día 46)
  const diaDelAño = Math.floor((hoy - new Date(hoy.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  
  // El operador módulo (%) asegura que si hay 7 frases, el día 8 vuelva a la frase 1
  return citas[diaDelAño % citas.length];
};

export default function Hero() {
  const fraseHoy = getFraseDelDia();

  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
      <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-texto md:text-6xl">
        Aquí empieza tu <span className="text-principal relative inline-block">
          cambio
          <span className="absolute -bottom-2 left-0 h-3 w-full bg-secundario/20 -z-10 rounded"></span>
        </span>
      </h1>
      
      <p className="mx-auto mb-10 max-w-xl text-lg text-gray-600 leading-relaxed">
        Herramientas gratuitas, hábitos reales y una hoja de ruta para salir del estancamiento y construir la vida que te mereces.
      </p>
      
      <div className="mb-16">
        <Link 
          to="/recursos" 
          className="inline-flex items-center justify-center rounded-lg bg-principal px-8 py-4 text-base font-bold text-white shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 hover:bg-orange-600 hover:shadow-orange-500/40 focus:outline-none focus:ring-2 focus:ring-principal focus:ring-offset-2"
        >
          Ver recursos gratuitos →
        </Link>
      </div>

      {/* NUEVO: Bloque de la Frase del Día */}
      <div className="mx-auto max-w-2xl border-t border-gray-200 pt-12">
        <span className="text-xs font-bold uppercase tracking-widest text-principal">Frase del día</span>
        <blockquote className="mt-4">
          <p className="text-xl font-medium italic text-gray-800">
            "{fraseHoy.texto}"
          </p>
          <footer className="mt-3 text-sm font-semibold text-gray-500">
            — {fraseHoy.autor}
          </footer>
        </blockquote>
      </div>

    </section>
  );
}