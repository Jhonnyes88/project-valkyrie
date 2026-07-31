"use client";

import { ChangeEvent, useRef } from "react";

interface AvatarUploaderProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AvatarUploader({
  value,
  onChange,
}: AvatarUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelectImage = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Solo se permiten imágenes.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        onChange(reader.result);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    onChange("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-white">
        Avatar
      </label>

      <div className="flex items-center gap-6">
        <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-zinc-700 bg-zinc-900">
          {value ? (
            <img
              src={value}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-center text-xs text-zinc-500">
              Sin avatar
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleSelectImage}
            className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            {value ? "Cambiar imagen" : "Seleccionar imagen"}
          </button>

          {value && (
            <button
              type="button"
              onClick={handleRemove}
              className="rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            >
              Eliminar avatar
            </button>
          )}
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}