"use client";

import { useEffect, useState } from "react";

import { Character } from "../types/character";
import {
  CharacterFieldErrors,
  CharacterFormData,
  validateCharacter,
} from "../validation/characterValidation";

interface UseCharacterFormProps {
  character: Character | null;
  onCreateCharacter: (character: Character) => void;
  onUpdateCharacter: (character: Character) => void;
  onCancel: () => void;
}

function createInitialFormData(
  character: Character | null
): CharacterFormData {
  return {
    name: character?.name ?? "",
    stageName: character?.stageName ?? "",

    gender: character?.gender ?? "",
    age: character?.age ?? 18,

    nationality: character?.nationality ?? "",
    language: character?.language ?? "",

    profession: character?.profession ?? "",

    height: character?.height ?? "",
    weight: character?.weight ?? "",

    skinColor: character?.skinColor ?? "",
    eyeColor: character?.eyeColor ?? "",
    hairColor: character?.hairColor ?? "",

    bodyType: character?.bodyType ?? "",

    personality: character?.personality ?? "",

    biography: character?.biography ?? "",

    masterPrompt: character?.masterPrompt ?? "",

    avatar: character?.avatar ?? "",
  };
}

export function useCharacterForm({
  character,
  onCreateCharacter,
  onUpdateCharacter,
  onCancel,
}: UseCharacterFormProps) {
  const [formData, setFormData] = useState<CharacterFormData>(
    createInitialFormData(character)
  );

  const [errors, setErrors] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] =
    useState<CharacterFieldErrors>({});

  useEffect(() => {
    setFormData(createInitialFormData(character));
    setErrors([]);
    setFieldErrors({});
  }, [character]);

  const setFieldValue = <
    K extends keyof CharacterFormData
  >(
    field: K,
    value: CharacterFormData[K]
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setFieldErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFieldValue(
      e.target.name as keyof CharacterFormData,
      e.target.value
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateCharacter(formData);

    setErrors(validation.errors);
    setFieldErrors(validation.fieldErrors);

    if (validation.errors.length > 0) {
      return;
    }

    const updatedCharacter: Character = {
      id: character?.id ?? crypto.randomUUID(),

      name: formData.name,
      stageName: formData.stageName,

      gender: formData.gender,
      age: Number(formData.age),

      nationality: formData.nationality,
      language: formData.language,

      profession: formData.profession,

      height: formData.height,
      weight: formData.weight,

      skinColor: formData.skinColor,
      eyeColor: formData.eyeColor,
      hairColor: formData.hairColor,

      bodyType: formData.bodyType,

      personality: formData.personality,

      biography: formData.biography,

      masterPrompt: formData.masterPrompt,

      avatar: formData.avatar,

      createdAt: character?.createdAt ?? new Date(),
      updatedAt: new Date(),
    };

    if (character) {
      onUpdateCharacter(updatedCharacter);
    } else {
      onCreateCharacter(updatedCharacter);
    }

    onCancel();
  };

  return {
    formData,
    errors,
    fieldErrors,
    handleChange,
    setFieldValue,
    handleSubmit,
  };
}