"use client";

import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";

import { CharacterFormData } from "../validation/characterValidation";

interface PhysicalSectionProps {
  formData: CharacterFormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

export default function PhysicalSection({
  formData,
  handleChange,
}: PhysicalSectionProps) {
  return (
    <section className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <h2 className="text-lg font-semibold text-white">
        🧍 Apariencia Física
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField label="Altura">
          <Input
            type="text"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="1.70 m"
          />
        </FormField>

        <FormField label="Peso">
          <Input
            type="text"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="60 kg"
          />
        </FormField>

        <FormField label="Color de piel">
          <Input
            type="text"
            name="skinColor"
            value={formData.skinColor}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Color de ojos">
          <Input
            type="text"
            name="eyeColor"
            value={formData.eyeColor}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Color de cabello">
          <Input
            type="text"
            name="hairColor"
            value={formData.hairColor}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Tipo de cuerpo">
          <Input
            type="text"
            name="bodyType"
            value={formData.bodyType}
            onChange={handleChange}
          />
        </FormField>
      </div>
    </section>
  );
}