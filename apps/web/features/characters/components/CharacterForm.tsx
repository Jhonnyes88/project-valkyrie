"use client";

import { Character } from "../types/character";
import { useCharacterForm } from "../hooks/useCharacterForm";

interface CharacterFormProps {
  onCancel: () => void;
  onCreateCharacter: (character: Character) => void;
}

export default function CharacterForm({
  onCancel,
  onCreateCharacter,
}: CharacterFormProps) {
  const {
    formData,
    errors,
    handleChange,
    handleSubmit,
  } = useCharacterForm({
    onCreateCharacter,
    onCancel,
  });

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">

      {errors.length > 0 && (
        <div className="rounded-lg border border-red-500 bg-red-900/30 p-4">
          <ul className="list-disc pl-5 text-sm text-red-300">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Nombre */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Nombre
        </label>

        <input
          type="text"
          name="name"
          placeholder="Emma"
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      {/* Nombre artístico */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Nombre artístico
        </label>

        <input
          type="text"
          name="stageName"
          placeholder="Emma Frost"
          value={formData.stageName}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      {/* Género */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Género
        </label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        >
          <option value="">Selecciona...</option>
          <option value="Femenino">Femenino</option>
          <option value="Masculino">Masculino</option>
          <option value="No binario">No binario</option>
        </select>
      </div>

      {/* Nacionalidad */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Nacionalidad
        </label>

        <input
          type="text"
          name="nationality"
          placeholder="Colombia"
          value={formData.nationality}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      {/* Idioma */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Idioma
        </label>

        <input
          type="text"
          name="language"
          placeholder="Español"
          value={formData.language}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      {/* Profesión */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Profesión
        </label>

        <input
          type="text"
          name="profession"
          placeholder="Modelo Virtual"
          value={formData.profession}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-700 px-5 py-2 text-white transition hover:bg-slate-800"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="rounded-lg bg-violet-600 px-5 py-2 text-white transition hover:bg-violet-700"
        >
          Crear personaje
        </button>
      </div>
    </form>
  );
}