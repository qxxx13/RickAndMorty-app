import { Action } from "./Actions";
import { Dispatch } from "react";
import { AppContextType } from "./DefaultContextValue";

export type AppContextState = {
    state: AppContextType;
    dispatch: Dispatch<Action>;
};
