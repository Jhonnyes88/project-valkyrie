import { Character } from "../types/character";
import { CharacterRepository } from "./CharacterRepository";

import {
  loadCharacters,
  saveCharacters,
} from "../services/localStorageService";

class LocalStorageCharacterRepository
  implements CharacterRepository
{
  async getAll(): Promise<Character[]> {
    return loadCharacters();
  }

  async create(character: Character): Promise<void> {
    const characters = loadCharacters();

    characters.push(character);

    saveCharacters(characters);
  }

  async update(character: Character): Promise<void> {
    const characters = loadCharacters();

    const updatedCharacters = characters.map((currentCharacter) =>
      currentCharacter.id === character.id
        ? character
        : currentCharacter
    );

    saveCharacters(updatedCharacters);
  }

  async delete(id: string): Promise<void> {
    const characters = loadCharacters();

    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );

    saveCharacters(filteredCharacters);
  }
}

export const localStorageCharacterRepository =
  new LocalStorageCharacterRepository();