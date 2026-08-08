"use client";
import { ArrowRight, FolderKanban, Sparkles, Users } from "lucide-react";
import Link from "next/link";
import { useDashboard } from "@/features/dashboard/hooks/useDashboard";

import StatCard from "@/components/ui/StatCard";
import DashboardHero from "@/features/dashboard/components/DashboardHero";
import DashboardStats from "@/features/dashboard/components/DashboardStats";
import RecentCharacters from "@/features/dashboard/components/RecentCharacters";

export default function DashboardPage() {

  const {
    totalCharacters,
    totalProjects,
    recentCharacters,
    projectNames,
  } = useDashboard();

  return (

    <div className="space-y-10">
      {/* Hero */}
      <DashboardHero />

      {/* Estadísticas */}
      <DashboardStats
        totalCharacters={totalCharacters}
        totalProjects={totalProjects}
      />

      <RecentCharacters
        characters={recentCharacters}
        projectNames={projectNames}
      />

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