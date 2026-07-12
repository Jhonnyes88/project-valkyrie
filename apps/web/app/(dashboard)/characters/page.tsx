export default function CharactersPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white">
        Personajes
      </h1>

      <p className="mt-3 text-slate-400">
        Administra todos tus personajes virtuales.
      </p>

      <div className="mt-8">
        <button className="rounded-lg bg-violet-600 px-5 py-3 text-white hover:bg-violet-700">
          + Nuevo personaje
        </button>
      </div>

      <div className="mt-10 rounded-xl border border-dashed border-slate-700 p-12 text-center">
        <h2 className="text-xl font-semibold text-white">
          No hay personajes
        </h2>

        <p className="mt-2 text-slate-400">
          Crea tu primer personaje para comenzar.
        </p>
      </div>
    </>
  );
}