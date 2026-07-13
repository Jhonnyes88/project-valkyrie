import CharacterForm from "../components/CharacterForm";
import { Character } from "../types/character";

interface CreateCharacterModalProps {
  open: boolean;
  onClose: () => void;
  onCreateCharacter: (character: Character) => void;
}

export default function CreateCharacterModal({
  open,
  onClose,
  onCreateCharacter,
}: CreateCharacterModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-xl rounded-2xl bg-slate-900 p-8 shadow-2xl">
        <h2 className="text-2xl font-bold text-white">
          Nuevo personaje
        </h2>

        <p className="mt-2 text-slate-400">
          Completa la información básica para crear un personaje.
        </p>

        <CharacterForm
          onCancel={onClose}
          onCreateCharacter={onCreateCharacter}
        />
      </div>
    </div>
  );
}