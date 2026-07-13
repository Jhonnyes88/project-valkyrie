interface BasicInfoSectionProps {
  formData: {
    name: string;
    stageName: string;
    gender: string;
    age: number;
    nationality: string;
    language: string;
    profession: string;
  };

  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function BasicInfoSection({
  formData,
  handleChange,
}: BasicInfoSectionProps) {
  return (
    <section className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">

      <h3 className="text-xl font-semibold text-white">
        Información básica
      </h3>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Nombre
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-violet-500 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Nombre artístico
          </label>

          <input
            type="text"
            name="stageName"
            value={formData.stageName}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-violet-500 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Género
          </label>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-violet-500 outline-none"
          >
            <option value="">Selecciona...</option>
            <option value="Femenino">Femenino</option>
            <option value="Masculino">Masculino</option>
            <option value="No binario">No binario</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Edad
          </label>

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-violet-500 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Nacionalidad
          </label>

          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-violet-500 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Idioma
          </label>

          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-violet-500 outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm text-slate-300">
            Profesión
          </label>

          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white focus:border-violet-500 outline-none"
          />
        </div>

      </div>

    </section>
  );
}