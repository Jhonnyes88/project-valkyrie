import { Character } from "../types/character";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({
  character,
}: CharacterCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:border-violet-500">
      <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-800 text-3xl">
        👤
      </div>

      <h2 className="text-xl font-semibold text-white">
        {character.name}
      </h2>

      <p className="text-violet-400">
        {character.stageName}
      </p>

      <div className="mt-5 space-y-2 text-sm text-slate-400">
        <p>🌍 {character.nationality}</p>
        <p>💼 {character.profession}</p>
        <p>✨ {character.personality}</p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700">
        Ver detalles
      </button>
    </div>
  );
}