"use client";

interface CharacterHeaderProps {
  onOpenCreateModal: () => void;
}

export default function CharacterHeader({
  onOpenCreateModal,
}: CharacterHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Personajes
        </h1>

        <p className="mt-2 text-slate-400">
          Administra todos tus personajes virtuales.
        </p>
      </div>

      <button
        onClick={onOpenCreateModal}
        className="rounded-lg bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700"
      >
        + Nuevo personaje
      </button>
    </div>
  );
}