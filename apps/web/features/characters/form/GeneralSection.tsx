"use client";

import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectOption,
} from "@/components/ui/select";

import {
  CharacterFieldErrors,
  CharacterFormData,
} from "../validation/characterValidation";

interface GeneralSectionProps {
  formData: CharacterFormData;
  fieldErrors: CharacterFieldErrors;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;

  projectOptions?: SelectOption[];
}

const genderOptions: SelectOption[] = [
  {
    value: "Femenino",
    label: "Femenino",
  },
  {
    value: "Masculino",
    label: "Masculino",
  },
  {
    value: "No binario",
    label: "No binario",
  },
];

export default function GeneralSection({
  formData,
  fieldErrors,
  handleChange,
  projectOptions = [],
}: GeneralSectionProps) {
  return (
    <section className="space-y-6 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
      <h2 className="text-lg font-semibold text-white">
        👤 Información General
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          label="Nombre"
          required
          error={fieldErrors.name}
        >
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!fieldErrors.name}
          />
        </FormField>

        <FormField
          label="Nombre artístico"
          required
          error={fieldErrors.stageName}
        >
          <Input
            type="text"
            name="stageName"
            value={formData.stageName}
            onChange={handleChange}
            error={!!fieldErrors.stageName}
          />
        </FormField>

        <FormField label="Edad">
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min={18}
          />
        </FormField>

        <FormField
          label="Género"
          required
          error={fieldErrors.gender}
        >
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={genderOptions}
            error={!!fieldErrors.gender}
          />
        </FormField>

        <FormField
          label="Profesión"
          required
          error={fieldErrors.profession}
        >
          <Input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            error={!!fieldErrors.profession}
          />
        </FormField>

        <FormField
          label="Nacionalidad"
          required
          error={fieldErrors.nationality}
        >
          <Input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            error={!!fieldErrors.nationality}
          />
        </FormField>

        <FormField
          className="md:col-span-2"
          label="Idioma"
          required
          error={fieldErrors.language}
        >
          <Input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            error={!!fieldErrors.language}
          />
        </FormField>

        <FormField
          className="md:col-span-2"
          label="Proyecto"
        >
          <Select
            name="projectId"
            value={(formData as CharacterFormData & { projectId?: string | null }).projectId ?? ""}
            onChange={(e) => {
  console.log("name:", e.target.name);
  console.log("value:", e.target.value);
  handleChange(e);
}}
            options={[
              {
                value: "",
                label: "Sin proyecto",
              },
              ...projectOptions,
            ]}
          />
        </FormField>
      </div>
    </section>
  );
}