"use client";

import { FormField } from "@/components/ui/form-field";
import { Textarea } from "@/components/ui/textarea";

import { CharacterFormData } from "../validation/characterValidation";

interface PersonalitySectionProps {
  formData: CharacterFormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function PersonalitySection({
  formData,
  handleChange,
}: PersonalitySectionProps) {
  return (
    <section className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <h2 className="text-lg font-semibold text-white">
        🧠 Personalidad
      </h2>

      <FormField
        label="Describe la personalidad del personaje"
        description="Estos rasgos ayudarán a definir el comportamiento base del personaje."
      >
        <Textarea
          name="personality"
          value={formData.personality}
          onChange={handleChange}
          rows={5}
          placeholder="Ejemplo: Elegante, segura de sí misma, divertida, espontánea, inteligente..."
        />
      </FormField>
    </section>
  );
}