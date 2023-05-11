import { CharacterItemModel } from "./CharacterItemModel";

export type CharactersModel = {
    characters: {
        info: {
            count: number;
            pages: number;
        };
        results: CharacterItemModel[];
    };
};
