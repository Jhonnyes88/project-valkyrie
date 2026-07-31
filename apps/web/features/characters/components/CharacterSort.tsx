"use client";

export type CharacterSortOption =
  | "recent"
  | "oldest"
  | "name-asc"
  | "name-desc";

interface CharacterSortProps {
  value: CharacterSortOption;
  onChange: (value: CharacterSortOption) => void;
}

export default function CharacterSort({
  value,
  onChange,
}: CharacterSortProps) {
  return (
    <div className="mb-8">
      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value as CharacterSortOption)
        }
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
      >
        <option value="recent">Más recientes</option>
        <option value="oldest">Más antiguos</option>
        <option value="name-asc">Nombre A-Z</option>
        <option value="name-desc">Nombre Z-A</option>
      </select>
    </div>
  );
}