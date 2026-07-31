import { Character } from "../types/character";

interface CharacterCardProps {
  character: Character;
  onSelect: (character: Character) => void;
}

export default function CharacterCard({
  character,
  onSelect,
}: CharacterCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/60 hover:shadow-2xl hover:shadow-violet-900/20">
      <div className="h-20 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600" />

      <div className="-mt-12 flex justify-center">
        {character.avatar ? (
          <img
            src={character.avatar}
            alt={character.name}
            className="h-24 w-24 rounded-full border-4 border-slate-900 object-cover shadow-lg"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-800 text-4xl shadow-lg">
            👤
          </div>
        )}
      </div>

      <div className="px-6 pb-6 pt-4">
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">
            {character.name}
          </h2>

          <p className="mt-1 text-sm text-violet-400">
            @{character.stageName}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {character.gender && (
            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
              {character.gender}
            </span>
          )}

          {character.nationality && (
            <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
              {character.nationality}
            </span>
          )}
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Profesión
            </p>

            <p className="mt-1 text-sm text-slate-200">
              {character.profession || "Sin definir"}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Personalidad
            </p>

            <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-300">
              {character.personality || "Sin definir"}
            </p>
          </div>
        </div>

        <button
          onClick={() => onSelect(character)}
          className="mt-8 w-full rounded-2xl bg-violet-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:bg-violet-500 active:scale-[0.98]"
        >
          Ver detalles
        </button>
      </div>
    </article>
  );
}