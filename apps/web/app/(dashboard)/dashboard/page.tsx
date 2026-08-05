import { ArrowRight, FolderKanban, Sparkles, Users } from "lucide-react";
import Link from "next/link";

import StatCard from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-700 p-10 shadow-2xl shadow-violet-900/20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-violet-100 backdrop-blur">
            <Sparkles size={16} />
            Bienvenido a Valkyrie Studio
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-white">
            Crea personajes virtuales impulsados por IA.
          </h1>

          <p className="mt-5 text-lg leading-8 text-violet-100/90">
            Diseña personajes, organízalos por proyectos y prepárate para
            generar contenido con inteligencia artificial desde un solo lugar.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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

      {/* Estadísticas */}
      <section>
        <div className="mb-5">
          <h2 className="text-2xl font-bold text-white">
            Resumen
          </h2>

          <p className="text-slate-400">
            Una vista rápida de tu espacio de trabajo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Personajes"
            value={0}
            subtitle="Sin personajes"
          />

          <StatCard
            title="Proyectos"
            value={0}
            subtitle="Sin proyectos"
          />

          <StatCard
            title="Imágenes IA"
            value={0}
            subtitle="Próximamente"
          />

          <StatCard
            title="Publicaciones"
            value={0}
            subtitle="Próximamente"
          />
        </div>
      </section>

      {/* Acciones rápidas */}
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-500/10 p-3">
              <Users className="text-violet-400" />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Personajes
            </h3>
          </div>

          <p className="mt-4 leading-7 text-slate-400">
            Crea influencers virtuales, streamers, modelos,
            asistentes o cualquier personaje impulsado por IA.
          </p>

          <Link
            href="/characters"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-violet-400 hover:text-violet-300"
          >
            Ir a personajes

            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-fuchsia-500/10 p-3">
              <FolderKanban className="text-fuchsia-400" />
            </div>

            <h3 className="text-xl font-semibold text-white">
              Proyectos
            </h3>
          </div>

          <p className="mt-4 leading-7 text-slate-400">
            Organiza tus personajes dentro de proyectos para
            administrar campañas y contenido de forma profesional.
          </p>

          <Link
            href="/projects"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-fuchsia-400 hover:text-fuchsia-300"
          >
            Ir a proyectos

            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}