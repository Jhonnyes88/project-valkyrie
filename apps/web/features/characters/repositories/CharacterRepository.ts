import { Character } from "../types/character";

export interface CharacterRepository {
  getAll(): Promise<Character[]>;

  create(character: Character): Promise<void>;

  update(character: Character): Promise<void>;

  delete(id: string): Promise<void>;
}