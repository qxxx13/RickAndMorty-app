import React from "react";
import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../../apollo/getCharacter";
import { Container, Stack } from "@mui/material";
import { CharacterItem } from "./CharacterItem/CharacterItem";
import { CharacterItemModel } from "../../models/CharacterItemModel";

export const CharacterPage: React.FC = () => {
    const [character, setCharacter] = useState<CharacterItemModel[]>([]);
    const { loading, data } = useQuery(GET_CHARACTERS);

    const CharacterList = useMemo(() => {
        return character.map((character) => <CharacterItem character={character} key={character.id} />);
    }, [character]);

    useEffect(() => {
        if (!loading && data) {
            setCharacter(data.characters.results);
        }
    }, [data, loading]);

    console.log(character);

    return (
        <Container>
            <Stack sx={{ flexWrap: "wrap" }} flexDirection="row" justifyContent="space-between">
                {loading ? <h1>Loading...</h1> : CharacterList}
            </Stack>
        </Container>
    );
};
