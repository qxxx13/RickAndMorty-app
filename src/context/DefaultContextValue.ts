export const DefaultContextValue = {
    currentPage: Number(localStorage.getItem("currentPage")),
    searchValue: localStorage.getItem("searchValue") || "",
    totalPages: 0,
};

export type AppContextType = typeof DefaultContextValue;
