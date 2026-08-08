import { ArrowRight, FolderKanban, Users } from "lucide-react";
import Link from "next/link";

export default function DashboardActions() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-violet-500/10 p-2.5">
            <Users className="text-violet-400" size={20} />
          </div>

          <h3 className="text-lg font-semibold text-white">
            Personajes
          </h3>
        </div>

        <p className="mt-3 leading-6 text-slate-400">
          Crea influencers virtuales, streamers, modelos,
          asistentes o cualquier personaje impulsado por IA.
        </p>

        <Link
          href="/characters"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
        >
          Ir a personajes
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-fuchsia-500/10 p-2.5">
            <FolderKanban className="text-fuchsia-400" size={20} />
          </div>

          <h3 className="text-lg font-semibold text-white">
            Proyectos
          </h3>
        </div>

        <p className="mt-3 leading-6 text-slate-400">
          Organiza tus personajes dentro de proyectos para
          administrar campañas y contenido de forma profesional.
        </p>

        <Link
          href="/projects"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-400 transition hover:text-fuchsia-300"
        >
          Ir a proyectos
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}