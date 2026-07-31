import CharacterForm from "../components/CharacterForm";
import { Character } from "../types/character";

interface CreateCharacterModalProps {
  open: boolean;
  character: Character | null;
  onClose: () => void;
  onCreateCharacter: (character: Character) => void;
  onUpdateCharacter: (character: Character) => void;
  onDeleteCharacter: (id: string) => void;
}

export default function CreateCharacterModal({
  open,
  character,
  onClose,
  onCreateCharacter,
  onUpdateCharacter,
  onDeleteCharacter,
}: CreateCharacterModalProps) {
  if (!open) return null;

  const isEditing = character !== null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl">

        <div className="border-b border-slate-800 p-8">
          <h2 className="text-2xl font-bold text-white">
            {isEditing ? "Editar personaje" : "Nuevo personaje"}
          </h2>

          <p className="mt-2 text-slate-400">
            {isEditing
              ? "Modifica la información del personaje."
              : "Completa la información básica para crear un personaje."}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          <CharacterForm
            character={character}
            onCancel={onClose}
            onCreateCharacter={onCreateCharacter}
            onUpdateCharacter={onUpdateCharacter}
            onDeleteCharacter={onDeleteCharacter}
          />
        </div>
      </div>
    </div>
  );
}