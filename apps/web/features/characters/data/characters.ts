import { Character } from "../types/character";

export const characters: Character[] = [
  {
    id: "1",

    // Información general
    name: "Emma",
    stageName: "Emma Frost",
    gender: "Femenino",
    nationality: "Colombia",
    language: "Español",
    profession: "Modelo Virtual",

    // Apariencia
    age: 24,
    height: "1.68 m",
    weight: "55 kg",
    skinColor: "Trigueña",
    eyeColor: "Café",
    hairColor: "Negro",
    bodyType: "Atlético",

    // Perfil
    personality: "Elegante",
    biography: "Primer personaje de Valkyrie.",

    // IA
    masterPrompt: "",
    avatar: "",

    // Auditoría
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];