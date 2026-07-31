"use client";

interface CharacterFiltersProps {
  gender: string;
  profession: string;
  nationality: string;
  onGenderChange: (value: string) => void;
  onProfessionChange: (value: string) => void;
  onNationalityChange: (value: string) => void;
}

export default function CharacterFilters({
  gender,
  profession,
  nationality,
  onGenderChange,
  onProfessionChange,
  onNationalityChange,
}: CharacterFiltersProps) {
  return (
    <div className="mb-8 grid gap-4 md:grid-cols-3">
      <select
        value={gender}
        onChange={(e) => onGenderChange(e.target.value)}
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white"
      >
        <option value="">Todos los géneros</option>
        <option value="Femenino">Femenino</option>
        <option value="Masculino">Masculino</option>
        <option value="No binario">No binario</option>
      </select>

      <input
        type="text"
        value={profession}
        onChange={(e) => onProfessionChange(e.target.value)}
        placeholder="Profesión..."
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500"
      />

      <input
        type="text"
        value={nationality}
        onChange={(e) => onNationalityChange(e.target.value)}
        placeholder="Nacionalidad..."
        className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500"
      />
    </div>
  );
}