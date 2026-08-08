import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

import { Character } from "@/features/characters/types/character";

interface RecentCharactersProps {
  characters: Character[];
  projectNames: Record<string, string>;
}

export default function RecentCharacters({
  characters,
  projectNames,
}: RecentCharactersProps) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-violet-500/10 p-2.5">
              <Users className="text-violet-400" size={20} />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Personajes recientes
            </h2>
          </div>

          <p className="mt-2 text-sm text-slate-400">
            Los últimos personajes creados en Valkyrie Studio.
          </p>
        </div>

        <Link
          href="/characters"
          className="hidden items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300 sm:flex"
        >
          Ver todos
          <ArrowRight size={16} />
        </Link>
      </div>

      {characters.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-950/40 p-7 text-center">
          <p className="text-sm text-slate-400">
            Aún no has creado personajes.
          </p>

          <Link
            href="/characters"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300"
          >
            Crear personaje
            <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="mt-6 divide-y divide-slate-800/70">
          {characters.map((character) => (
            <div
              key={character.id}
              className="flex items-center gap-4 py-3.5 first:pt-0 last:pb-0"
            >
              {character.avatar ? (
                <img
                  src={character.avatar}
                  alt={character.name}
                  className="h-11 w-11 shrink-0 rounded-full border border-slate-700 object-cover"
                />
              ) : (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-lg">
                  👤
                </div>
              )}

              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold text-white">
                  {character.name}
                </p>

                <p className="mt-1 truncate text-sm text-slate-400">
                  @{character.stageName}
                </p>
              </div>

              <div className="hidden max-w-40 text-right sm:block">
                <p className="truncate text-sm text-slate-300">
                  {character.projectId
                    ? projectNames[character.projectId] ?? "Proyecto desconocido"
                    : "Sin proyecto"}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {character.profession || "Sin profesión"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link
        href="/characters"
        className="mt-5 flex items-center justify-center gap-2 border-t border-slate-800/70 pt-4 text-sm font-semibold text-violet-400 transition hover:text-violet-300 sm:hidden"
      >
        Ver todos los personajes
        <ArrowRight size={16} />
      </Link>
    </section>
  );
}