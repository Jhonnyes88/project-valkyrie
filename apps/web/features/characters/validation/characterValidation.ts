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

export function validateCharacter(
  data: CharacterFormData
): string[] {

  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push("El nombre es obligatorio.");
  }

  if (!data.stageName.trim()) {
    errors.push("El nombre artístico es obligatorio.");
  }

  if (!data.gender) {
    errors.push("Selecciona un género.");
  }

  if (!data.nationality.trim()) {
    errors.push("La nacionalidad es obligatoria.");
  }

  if (!data.language.trim()) {
    errors.push("El idioma es obligatorio.");
  }

  if (!data.profession.trim()) {
    errors.push("La profesión es obligatoria.");
  }

  return errors;
}