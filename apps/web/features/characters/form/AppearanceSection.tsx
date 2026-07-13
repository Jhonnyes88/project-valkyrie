interface AppearanceSectionProps {
  formData: {
    height: string;
    weight: string;
    skinColor: string;
    eyeColor: string;
    hairColor: string;
    bodyType: string;
  };

  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function AppearanceSection({
  formData,
  handleChange,
}: AppearanceSectionProps) {
  return (
    <section className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">

      <h3 className="text-xl font-semibold text-white">
        Apariencia física
      </h3>

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Altura
          </label>

          <input
            type="text"
            name="height"
            placeholder="1.68 m"
            value={formData.height}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Peso
          </label>

          <input
            type="text"
            name="weight"
            placeholder="55 kg"
            value={formData.weight}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Color de piel
          </label>

          <input
            type="text"
            name="skinColor"
            value={formData.skinColor}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Color de ojos
          </label>

          <input
            type="text"
            name="eyeColor"
            value={formData.eyeColor}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Color de cabello
          </label>

          <input
            type="text"
            name="hairColor"
            value={formData.hairColor}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-slate-300">
            Tipo de cuerpo
          </label>

          <input
            type="text"
            name="bodyType"
            placeholder="Atlético"
            value={formData.bodyType}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-violet-500"
          />
        </div>

      </div>

    </section>
  );
}