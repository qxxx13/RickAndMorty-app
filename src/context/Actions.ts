export enum ActionType {
    SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
    SET_SEARCH_VALUE = "SET_SEARCH_VALUE",
    SET_TOTAL_PAGES = "SET_TOTAL_PAGES",
}

export type Action<T = any> = {
    type: ActionType;
    payload: T;
};
