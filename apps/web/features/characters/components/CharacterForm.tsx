interface CharacterFormProps {
  onCancel: () => void;
}

export default function CharacterForm({
  onCancel,
}: CharacterFormProps) {
  return (
    <form className="mt-8 space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Nombre
        </label>

        <input
          type="text"
          placeholder="Emma"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Nombre artístico
        </label>

        <input
          type="text"
          placeholder="Emma Frost"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Género
        </label>

        <select
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        >
          <option>Selecciona...</option>
          <option>Femenino</option>
          <option>Masculino</option>
          <option>No binario</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Nacionalidad
        </label>

        <input
          type="text"
          placeholder="Colombia"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Idioma
        </label>

        <input
          type="text"
          placeholder="Español"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Profesión
        </label>

        <input
          type="text"
          placeholder="Modelo Virtual"
          className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-700 px-5 py-2 text-white hover:bg-slate-800"
        >
          Cancelar
        </button>

        <button
          type="submit"
          className="rounded-lg bg-violet-600 px-5 py-2 text-white hover:bg-violet-700"
        >
          Crear personaje
        </button>
      </div>
    </form>
  );
}