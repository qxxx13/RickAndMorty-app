import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { CharacterItemModel } from "../../../models/CharacterItemModel";

type CharacterItemProps = {
    character: CharacterItemModel;
};

export const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
    return (
        <Card sx={{ width: 250, mb: 2 }}>
            <CardActionArea>
                <CardMedia sx={{ height: 300 }} image={character.image} />
            </CardActionArea>
            <CardContent>
                <Typography variant="h5">{character.name}</Typography>
            </CardContent>
        </Card>
    );
};
