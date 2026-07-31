"use client";

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
    <section className="mb-8 rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-xl shadow-black/20 backdrop-blur-sm">
      <div className="flex-1">
        <CharacterSearch
          value={search}
          onChange={onSearchChange}
        />
      </div>

      <div className="my-6 h-px bg-slate-800/70" />

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          <CharacterFilters
            gender={gender}
            profession={profession}
            nationality={nationality}
            onGenderChange={onGenderChange}
            onProfessionChange={onProfessionChange}
            onNationalityChange={onNationalityChange}
          />
        </div>

        <div className="lg:shrink-0">
          <CharacterSort
            value={sort}
            onChange={onSortChange}
          />
        </div>
      </div>
    </section>
  );
}