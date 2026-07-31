"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import ConfirmDeleteDialog from "@/components/common/ConfirmDeleteDialog";

import AvatarSection from "../form/AvatarSection";
import BiographySection from "../form/BiographySection";
import GeneralSection from "../form/GeneralSection";
import MasterPromptSection from "../form/MasterPromptSection";
import PersonalitySection from "../form/PersonalitySection";
import PhysicalSection from "../form/PhysicalSection";

import { Character } from "../types/character";
import { useCharacterForm } from "../hooks/useCharacterForm";

interface CharacterFormProps {
  character: Character | null;
  onCancel: () => void;
  onCreateCharacter: (character: Character) => void;
  onUpdateCharacter: (character: Character) => void;
  onDeleteCharacter: (id: string) => void;
}

export default function CharacterForm({
  character,
  onCancel,
  onCreateCharacter,
  onUpdateCharacter,
  onDeleteCharacter,
}: CharacterFormProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const {
    formData,
    errors,
    fieldErrors,
    handleChange,
    setFieldValue,
    handleSubmit,
  } = useCharacterForm({
    character,
    onCreateCharacter,
    onUpdateCharacter,
    onCancel,
  });

  const isEditing = character !== null;

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {errors.length > 0 && (
          <div className="rounded-lg border border-red-500 bg-red-900/30 p-4">
            <ul className="list-disc pl-5 text-sm text-red-300">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <AvatarSection
          avatar={formData.avatar}
          onAvatarChange={(avatar) => setFieldValue("avatar", avatar)}
        />

        <GeneralSection
          formData={formData}
          fieldErrors={fieldErrors}
          handleChange={handleChange}
        />

        <PhysicalSection
          formData={formData}
          handleChange={handleChange}
        />

        <PersonalitySection
          formData={formData}
          handleChange={handleChange}
        />

        <BiographySection
          formData={formData}
          handleChange={handleChange}
        />

        <MasterPromptSection
          formData={formData}
          handleChange={handleChange}
        />

        <div className="flex justify-between pt-4">
          {isEditing ? (
            <Button
              type="button"
              variant="destructive"
              onClick={() => setConfirmOpen(true)}
            >
              Eliminar
            </Button>
          ) : (
            <div />
          )}

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
            >
              Cancelar
            </Button>

            <Button type="submit">
              {isEditing ? "Guardar cambios" : "Crear personaje"}
            </Button>
          </div>
        </div>
      </form>

      {character && (
        <ConfirmDeleteDialog
          open={confirmOpen}
          title="Eliminar personaje"
          description="Esta acción eliminará permanentemente el personaje y no podrá deshacerse."
          onCancel={() => setConfirmOpen(false)}
          onConfirm={() => {
            setConfirmOpen(false);
            onDeleteCharacter(character.id);
          }}
        />
      )}
    </>
  );
}