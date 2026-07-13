export interface Character {
  // Identificación
  id: string;

  // Información general
  name: string;
  stageName: string;
  gender: string;
  nationality: string;
  language: string;
  profession: string;

  // Apariencia
  age: number;
  height: string;
  weight: string;
  skinColor: string;
  eyeColor: string;
  hairColor: string;
  bodyType: string;

  // Perfil
  personality: string;
  biography: string;

  // IA
  masterPrompt: string;
  avatar: string;

  // Auditoría
  createdAt: Date;
  updatedAt: Date;
}