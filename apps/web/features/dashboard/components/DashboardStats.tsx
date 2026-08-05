import StatCard from "@/components/ui/StatCard";

interface DashboardStatsProps {
  totalCharacters: number;
  totalProjects: number;
}

export default function DashboardStats({
  totalCharacters,
  totalProjects,
}: DashboardStatsProps) {
  return (
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
          value={totalCharacters}
          subtitle={
            totalCharacters === 0
              ? "Sin personajes"
              : `${totalCharacters} personaje${totalCharacters > 1 ? "s" : ""}`
          }
        />

        <StatCard
          title="Proyectos"
          value={totalProjects}
          subtitle={
            totalProjects === 0
              ? "Sin proyectos"
              : `${totalProjects} proyecto${totalProjects > 1 ? "s" : ""}`
          }
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
  );
}