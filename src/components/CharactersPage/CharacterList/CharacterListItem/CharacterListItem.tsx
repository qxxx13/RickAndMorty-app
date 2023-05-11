import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import { CharacterItemModel } from "../../../../models/CharacterItemModel";

type CharacterItemProps = {
    character: CharacterItemModel;
};

export const CharacterListItem: React.FC<CharacterItemProps> = ({ character }) => {
    return (
        <Card sx={{ width: "100%", mb: 2, display: "flex" }} elevation={15}>
            <CardMedia sx={{ width: 300, height: 300 }} image={character.image} />
            <CardContent>
                <Typography variant="h5">{character.name}</Typography>
                <Typography variant="body2">{character.gender}</Typography>
                <Typography variant="body2">{character.species}</Typography>
                <Typography variant="body2">{character.status}</Typography>
            </CardContent>
        </Card>
    );
};
