import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ProjectToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  onCreateProject: () => void;
}

/**
 * ProjectToolbar
 *
 * Displays the main toolbar for the Projects module.
 *
 * Responsibilities:
 * - Display the module title.
 * - Display the module description.
 * - Allow searching projects.
 * - Provide access to project creation.
 */
export default function ProjectToolbar({
  search,
  onSearchChange,
  onCreateProject,
}: ProjectToolbarProps) {
  return (
    <header className="mb-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Projects
        </h1>

        <p className="mt-2 text-muted-foreground">
          Organiza personajes, recursos y contenido dentro de proyectos.
        </p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={18}
          />

          <Input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar proyectos..."
            className="pl-10"
          />
        </div>

        <Button onClick={onCreateProject}>
          <Plus size={18} />

          Nuevo proyecto
        </Button>
      </div>
    </header>
  );
}