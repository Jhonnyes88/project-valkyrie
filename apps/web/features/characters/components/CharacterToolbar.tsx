"use client";

import { SlidersHorizontal } from "lucide-react";

import CharacterFilters from "./CharacterFilters";
import CharacterSearch from "./CharacterSearch";
import CharacterSort, {
  CharacterSortOption,
} from "./CharacterSort";

interface CharacterToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  gender: string;
  onGenderChange: (value: string) => void;

  profession: string;
  onProfessionChange: (value: string) => void;

  nationality: string;
  onNationalityChange: (value: string) => void;

  sort: CharacterSortOption;
  onSortChange: (value: CharacterSortOption) => void;
}

export default function CharacterToolbar({
  search,
  onSearchChange,

  gender,
  onGenderChange,

  profession,
  onProfessionChange,

  nationality,
  onNationalityChange,

  sort,
  onSortChange,
}: CharacterToolbarProps) {
  return (
    <section className="mb-10 overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/70 shadow-xl backdrop-blur-xl">
      {/* Cabecera */}
      <div className="flex items-center gap-3 border-b border-slate-800/70 px-8 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10">
          <SlidersHorizontal
            size={20}
            className="text-violet-400"
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">
            Buscar y filtrar personajes
          </h2>

          <p className="text-sm text-slate-400">
            Encuentra rápidamente cualquier personaje de tu estudio.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-8 p-8">
        <CharacterSearch
          value={search}
          onChange={onSearchChange}
        />

        <div className="grid gap-6 xl:grid-cols-[1fr_auto] xl:items-end">
          <CharacterFilters
            gender={gender}
            profession={profession}
            nationality={nationality}
            onGenderChange={onGenderChange}
            onProfessionChange={onProfessionChange}
            onNationalityChange={onNationalityChange}
          />

          <div className="xl:w-64">
            <CharacterSort
              value={sort}
              onChange={onSortChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}