import { Action, ActionType } from "./Actions";
import { AppContextType } from "./DefaultContextValue";

export const AppReducer = (state: AppContextType, action: Action): AppContextType => {
    switch (action.type) {
        case ActionType.SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.payload };
        }
        case ActionType.SET_SEARCH_VALUE: {
            return { ...state, searchValue: action.payload };
        }
        case ActionType.SET_TOTAL_PAGES: {
            return { ...state, totalPages: action.payload };
        }
    }
};
