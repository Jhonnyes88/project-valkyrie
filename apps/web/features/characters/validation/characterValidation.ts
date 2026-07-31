export interface CharacterFormData {
  name: string;
  stageName: string;

  gender: string;
  age: number;

  nationality: string;
  language: string;

  profession: string;

  height: string;
  weight: string;

  skinColor: string;
  eyeColor: string;
  hairColor: string;

  bodyType: string;

  personality: string;

  biography: string;

  masterPrompt: string;

  avatar: string;
}

export type CharacterFieldErrors = Partial<
  Record<keyof CharacterFormData, string>
>;

export interface CharacterValidationResult {
  errors: string[];
  fieldErrors: CharacterFieldErrors;
}

export function validateCharacter(
  data: CharacterFormData
): CharacterValidationResult {
  const errors: string[] = [];

  const fieldErrors: CharacterFieldErrors = {};

  if (!data.name.trim()) {
    const message = "El nombre es obligatorio.";

    errors.push(message);
    fieldErrors.name = message;
  }

  if (!data.stageName.trim()) {
    const message = "El nombre artístico es obligatorio.";

    errors.push(message);
    fieldErrors.stageName = message;
  }

  if (!data.gender) {
    const message = "Selecciona un género.";

    errors.push(message);
    fieldErrors.gender = message;
  }

  if (!data.nationality.trim()) {
    const message = "La nacionalidad es obligatoria.";

    errors.push(message);
    fieldErrors.nationality = message;
  }

  if (!data.language.trim()) {
    const message = "El idioma es obligatorio.";

    errors.push(message);
    fieldErrors.language = message;
  }

  if (!data.profession.trim()) {
    const message = "La profesión es obligatoria.";

    errors.push(message);
    fieldErrors.profession = message;
  }

  return {
    errors,
    fieldErrors,
  };
}