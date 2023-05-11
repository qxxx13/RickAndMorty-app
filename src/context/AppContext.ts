import { createContext } from "react";
import { AppContextState } from "./AppContextState";

export const AppContext = createContext<AppContextState>(null!);
