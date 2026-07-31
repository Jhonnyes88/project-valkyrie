"use client";

import { FormField } from "@/components/ui/form-field";
import { Textarea } from "@/components/ui/textarea";

import { CharacterFormData } from "../validation/characterValidation";

interface MasterPromptSectionProps {
  formData: CharacterFormData;
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
}

export default function MasterPromptSection({
  formData,
  handleChange,
}: MasterPromptSectionProps) {
  const characterCount = formData.masterPrompt.length;

  return (
    <section className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <div>
        <h2 className="text-lg font-semibold text-white">
          🤖 Master Prompt
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Define las instrucciones principales que utilizará la IA para
          interpretar y mantener la personalidad de este personaje.
        </p>
      </div>

      <FormField
        label="Prompt Maestro"
        description="Este texto será utilizado como contexto principal para la IA."
      >
        <Textarea
          name="masterPrompt"
          value={formData.masterPrompt}
          onChange={handleChange}
          rows={10}
          placeholder="Ejemplo: Siempre responde como una influencer colombiana de 23 años, segura de sí misma, elegante, espontánea, con un lenguaje cercano, evitando respuestas demasiado técnicas..."
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