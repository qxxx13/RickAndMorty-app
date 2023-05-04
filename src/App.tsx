import React from "react";
import "./App.css";
import { ParticlesBackground } from "./common/ParticlesBackground/ParticlesBackground";
import { CharacterPage } from "./components/CharactersPage/CharacterPage";

export const App = () => {
    return (
        <div className="App">
            <ParticlesBackground />
            <CharacterPage />
        </div>
    );
};
