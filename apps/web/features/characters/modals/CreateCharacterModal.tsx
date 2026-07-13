import CharacterForm from "../components/CharacterForm";

interface CreateCharacterModalProps {
  open: boolean;
  onClose: () => void;
}

export default function CreateCharacterModal({
  open,
  onClose,
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

        <CharacterForm onCancel={onClose} />
      </div>
    </div>
  );
}