import React, { useMemo } from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

import { CharacterItemModel } from "../../../../models/CharacterItemModel";

type CharacterItemProps = {
    character: CharacterItemModel;
};

export const CharacterListItem: React.FC<CharacterItemProps> = ({ character }) => {
    const EpisodeList = useMemo(() => {
        return character.episode.map((episode) => {
            return (
                <Typography key={episode.id} variant="body1">
                    {episode.name}
                </Typography>
            );
        });
    }, [character.episode]);

    return (
        <Card sx={{ width: "100%", mb: 2, display: "flex", maxHeight: 300 }} elevation={15}>
            <CardMedia sx={{ width: 300, height: 300 }} image={character.image} />
            <CardContent sx={{ maxWidth: 400 }}>
                <Typography variant="h3">{character.name}</Typography>
                <Typography variant="body2">{character.gender}</Typography>
                <Typography variant="body2">{character.species}</Typography>
                <Typography variant="body2">{character.status}</Typography>
            </CardContent>
            <Stack sx={{ height: 300, overflowY: "auto", ml: "auto", padding: "16px", textAlign: "right" }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Episode:
                </Typography>
                {EpisodeList}
            </Stack>
        </Card>
    );
};
