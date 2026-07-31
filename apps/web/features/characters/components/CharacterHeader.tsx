"use client";

import PageHeader from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface CharacterHeaderProps {
  onOpenCreateModal: () => void;
}

export default function CharacterHeader({
  onOpenCreateModal,
}: CharacterHeaderProps) {
  return (
    <PageHeader
      title="Characters"
      description="Administra todos los personajes virtuales de Valkyrie Studio desde un único lugar."
      actions={
        <Button onClick={onOpenCreateModal}>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo personaje
        </Button>
      }
    />
  );
}