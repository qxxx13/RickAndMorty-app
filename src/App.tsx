import React from "react";
import "./App.css";
import { ParticlesBackground } from "./common/ParticlesBackground/ParticlesBackground";
import { CharacterList } from "./components/CharactersPage/CharacterList/CharacterList";
import { CharacterPage } from "./components/CharactersPage/CharacterPage";

export const App = () => {
    return (
        <>
            <ParticlesBackground />
            <CharacterPage />
        </>
    );
};
