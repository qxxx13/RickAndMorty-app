export type CharacterItemModel = {
    id: string;
    name: string;
    image: string;
    gender: string;
    status: string;
    species: string;
    episode: {
        id: string;
        name: string;
    }[];
};
