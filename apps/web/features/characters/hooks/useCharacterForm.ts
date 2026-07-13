"use client";

import { useState } from "react";

import BasicInfoSection from "../form/BasicInfoSection";
import AppearanceSection from "../form/AppearanceSection";

import { Character } from "../types/character";
import {
  CharacterFormData,
  validateCharacter,
} from "../validation/characterValidation";

interface UseCharacterFormProps {
  onCreateCharacter: (character: Character) => void;
  onCancel: () => void;
}

export function useCharacterForm({
  onCreateCharacter,
  onCancel,
}: UseCharacterFormProps) {
  const [formData, setFormData] = useState<CharacterFormData>({
  name: "",
  stageName: "",

  gender: "",
  age: 18,

  nationality: "",
  language: "",

  profession: "",

  height: "",
  weight: "",

  skinColor: "",
  eyeColor: "",
  hairColor: "",

  bodyType: "",

  personality: "",

  biography: "",

  masterPrompt: "",

  avatar: "",
});

  const [errors, setErrors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateCharacter(formData);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newCharacter: Character = {
      id: crypto.randomUUID(),

      gender: formData.gender,

      name: formData.name,
      stageName: formData.stageName,

      age: 0,

      nationality: formData.nationality,
      language: formData.language,

      height: "",
      weight: "",

      skinColor: "",
      eyeColor: "",
      hairColor: "",

      bodyType: "",

      personality: "",

      profession: formData.profession,

      biography: "",

      masterPrompt: "",

      avatar: "",

      createdAt: new Date(),
      updatedAt: new Date(),
    };

    onCreateCharacter(newCharacter);
    onCancel();
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}