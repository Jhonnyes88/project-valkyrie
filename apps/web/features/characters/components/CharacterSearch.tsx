"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface CharacterSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CharacterSearch({
  value,
  onChange,
}: CharacterSearchProps) {
  return (
    <div className="mb-8">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />

        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Buscar personaje..."
          className="bg-slate-900 py-3 pl-12 pr-4"
        />
      </div>
    </div>
  );
}