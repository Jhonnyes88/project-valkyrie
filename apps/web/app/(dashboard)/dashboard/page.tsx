"use client";

import { useDashboard } from "@/features/dashboard/hooks/useDashboard";

import DashboardHero from "@/features/dashboard/components/DashboardHero";
import DashboardStats from "@/features/dashboard/components/DashboardStats";
import RecentCharacters from "@/features/dashboard/components/RecentCharacters";
import RecentProjects from "@/features/dashboard/components/RecentProjects";
import RecentActivity from "@/features/dashboard/components/RecentActivity";
import DashboardActions from "@/features/dashboard/components/DashboardActions";

export default function DashboardPage() {
  const {
    totalCharacters,
    totalProjects,
    recentCharacters,
    projectNames,
    recentProjects,
    characterCounts,
    activities,
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

      {/* Personajes y proyectos recientes */}
      <section className="grid gap-6 lg:grid-cols-2">
        <RecentCharacters
          characters={recentCharacters}
          projectNames={projectNames}
        />

        <RecentProjects
          projects={recentProjects}
          characterCounts={characterCounts}
        />
      </section>

      {/* Actividad reciente */}
      <RecentActivity activities={activities} />

      {/* Acciones rápidas */}
      <DashboardActions />
    </div>
  );
}