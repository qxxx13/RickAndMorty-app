import React, { useReducer } from "react";
import "./App.css";
import { ParticlesBackground } from "./common/ParticlesBackground/ParticlesBackground";
import { AppContext } from "./context/AppContext";
import { AppContextType, DefaultContextValue } from "./context/DefaultContextValue";
import { Action } from "./context/Actions";
import { AppReducer } from "./context/AppReducer";
import { AppContextState } from "./context/AppContextState";
import { CharacterList } from "./components/CharactersPage/CharacterList/CharacterList";

export const App = () => {
    const [state, dispatch] = useReducer<React.Reducer<AppContextType, Action>>(AppReducer, DefaultContextValue);

    const ContextState: AppContextState = {
        state,
        dispatch,
    };

    return (
        <>
            <ParticlesBackground />
            <AppContext.Provider value={ContextState}>
                <CharacterList />
            </AppContext.Provider>
        </>
    );
};
