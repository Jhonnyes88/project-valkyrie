import StatCard from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white">
        Bienvenido a Valkyrie Studio
      </h1>

      <p className="mt-3 text-slate-400">
        Comienza creando tu primer personaje virtual.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Personajes"
          value={0}
          subtitle="Aún no has creado ninguno"
        />

        <StatCard title="Imágenes IA" value={0} />

        <StatCard title="Videos IA" value={0} />

        <StatCard title="Publicaciones" value={0} />
      </div>
    </>
  );
}