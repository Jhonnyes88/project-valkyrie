"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
  Project,
  ProjectColor,
  ProjectStatus,
} from "../types/project";

interface ProjectFormProps {
  project: Project | null;
  onCancel: () => void;
  onSubmit: (data: {
    name: string;
    description: string;
    status: ProjectStatus;
    color: ProjectColor;
  }) => void;
}

const colors: ProjectColor[] = [
  "blue",
  "green",
  "purple",
  "orange",
  "red",
  "pink",
];

const colorClasses: Record<ProjectColor, string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  purple: "bg-purple-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
  pink: "bg-pink-500",
};

/**
 * ProjectForm
 *
 * Responsibilities:
 * - Capture project information.
 * - Validate required fields.
 * - Return project data to the parent.
 */
export default function ProjectForm({
  project,
  onCancel,
  onSubmit,
}: ProjectFormProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] =
    useState<ProjectStatus>("active");
  const [color, setColor] =
    useState<ProjectColor>("blue");

  useEffect(() => {
    if (!project) {
      setName("");
      setDescription("");
      setStatus("active");
      setColor("blue");
      return;
    }

    setName(project.name);
    setDescription(project.description);
    setStatus(project.status);
    setColor(project.color);
  }, [project]);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    if (!name.trim()) return;

    onSubmit({
      name: name.trim(),
      description: description.trim(),
      status,
      color,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="name">
          Nombre del proyecto
        </Label>

        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Marketing 2026"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">
          Descripción
        </Label>

        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="Describe el propósito del proyecto..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="status">
          Estado
        </Label>

        <select
          id="status"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as ProjectStatus)
          }
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
        >
          <option value="active">Activo</option>
          <option value="paused">Pausado</option>
          <option value="archived">Archivado</option>
        </select>
      </div>

      <div className="space-y-3">
        <Label>Color</Label>

        <div className="flex flex-wrap gap-3">
          {colors.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setColor(item)}
              className={`h-8 w-8 rounded-full border-2 transition ${
                color === item
                  ? "scale-110 border-white"
                  : "border-transparent"
              }`}
            >
              <div
                className={`h-full w-full rounded-full ${colorClasses[item]}`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button type="submit">
          {project ? "Guardar cambios" : "Crear proyecto"}
        </Button>
      </div>
    </form>
  );
}