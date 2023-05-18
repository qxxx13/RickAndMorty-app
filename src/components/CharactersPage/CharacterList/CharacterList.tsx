import React from "react";
import { useMemo } from "react";
import { CircularProgress, Stack } from "@mui/material";

import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import { CharacterItemModel } from "../../../models/CharacterItemModel";
import { CharactersModel } from "../../../models/CharactersModel";

type CharacterListProps = {
    data?: CharactersModel;
    loading: boolean;
};

export const CharacterList: React.FC<CharacterListProps> = ({ data, loading }) => {
    const CharacterList = useMemo(() => {
        if (!loading)
            return data?.characters.results.map((character: CharacterItemModel) => (
                <CharacterListItem character={character} key={character.id} />
            ));
    }, [data, loading]);

    return <Stack alignItems="center">{!loading ? CharacterList : <CircularProgress />}</Stack>;
};
