import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DashboardHero() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-700 p-7 shadow-2xl shadow-violet-900/20 md:p-8">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-violet-100 backdrop-blur">
          <Sparkles size={16} />

          Bienvenido a Valkyrie Studio
        </div>

        <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
          Crea personajes virtuales impulsados por IA.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-violet-100/90 md:text-lg md:leading-8">
          Diseña personajes, organízalos por proyectos y prepárate para
          generar contenido con inteligencia artificial desde un solo lugar.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/characters"
            className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-[1.02]"
          >
            Crear personaje
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-2xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Ver proyectos

            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}