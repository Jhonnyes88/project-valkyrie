"use client";

import { useState } from "react";
import CreateCharacterModal from "../modals/CreateCharacterModal";

export default function CharacterHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Personajes
          </h1>

          <p className="mt-2 text-slate-400">
            Administra todos tus personajes virtuales.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-700"
        >
          + Nuevo personaje
        </button>
      </div>

      <CreateCharacterModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}