import { FolderKanban, Sparkles } from "lucide-react";

import { Character } from "../types/character";

interface CharacterCardProps {
  character: Character;
  projectName: string;
  onSelect: (character: Character) => void;
}

export default function CharacterCard({
  character,
  projectName,
  onSelect,
}: CharacterCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/80 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-900/20">
      {/* Banner */}
      <div className="h-24 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600" />

      {/* Avatar */}
      <div className="-mt-10 flex justify-center">
        {character.avatar ? (
          <img
            src={character.avatar}
            alt={character.name}
            className="h-20 w-20 rounded-full border-4 border-slate-900 object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-800 text-4xl shadow-xl">
            👤
          </div>
        )}
      </div>

      <div className="space-y-5 px-7 pb-7 pt-4">
        {/* Nombre */}
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            {character.name}
          </h2>

          <p className="mt-1 text-sm font-medium text-violet-300">
            @{character.stageName}
          </p>

          <div className="mt-4 flex justify-center">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-700 bg-slate-800/70 px-4 py-2 text-sm text-slate-300">
              <FolderKanban
                size={15}
                className="text-violet-400"
              />

              <span
                className="max-w-[170px] truncate"
                title={projectName}
              >
                {projectName}
              </span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {character.gender && (
            <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 ring-1 ring-violet-500/20">
              {character.gender}
            </span>
          )}

          {character.nationality && (
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
              {character.nationality}
            </span>
          )}
        </div>

        {/* Información */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Profesión
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              {character.profession || "Sin definir"}
            </p>
          </div>

          <div className="mt-5">
            <div className="flex items-center gap-2">
              <Sparkles
                size={14}
                className="text-violet-400"
              />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Personalidad
              </p>
            </div>

            <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-300">
              {character.personality || "Sin definir"}
            </p>
          </div>
        </div>

        {/* Botón */}
        <button
          onClick={() => onSelect(character)}
          className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3.5 font-semibold text-white shadow-lg shadow-violet-900/30 transition-all duration-300 hover:scale-[1.02] hover:from-violet-500 hover:to-fuchsia-500 active:scale-[0.98]"
        >
          Ver perfil
        </button>
      </div>
    </article>
  );
}