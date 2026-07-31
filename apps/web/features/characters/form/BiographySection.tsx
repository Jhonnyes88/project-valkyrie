"use client";

import { FormField } from "@/components/ui/form-field";
import { Textarea } from "@/components/ui/textarea";

import { CharacterFormData } from "../validation/characterValidation";

interface BiographySectionProps {
  formData: CharacterFormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export default function BiographySection({
  formData,
  handleChange,
}: BiographySectionProps) {
  const characterCount = formData.biography.length;

  return (
    <section className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <div>
        <h2 className="text-lg font-semibold text-white">
          📖 Biografía
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Describe la historia completa del personaje. Esta información será
          utilizada posteriormente para enriquecer el contexto de la IA.
        </p>
      </div>

      <FormField
        label="Biografía"
        description="Incluye pasado, motivaciones, relaciones, objetivos y cualquier detalle relevante."
      >
        <Textarea
          name="biography"
          value={formData.biography}
          onChange={handleChange}
          rows={8}
          placeholder="Describe la historia del personaje, su pasado, motivaciones, experiencias, educación, relaciones, objetivos y cualquier otro detalle relevante..."
        />
      </FormField>

      <div className="flex justify-end">
        <span className="text-xs text-slate-500">
          {characterCount} caracteres
        </span>
      </div>
    </section>
  );
}