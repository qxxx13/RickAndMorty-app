import React, { useEffect, useCallback, useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { AppContext } from "../../../context/AppContext";
import { ActionType } from "../../../context/Actions";

export const SearchField: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState(() => {
        return localStorage.getItem("searchValue");
    });

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const onSearch = useCallback(() => {
        dispatch({ type: ActionType.SET_CURRENT_PAGE, payload: 1 });
        dispatch({ type: ActionType.SET_SEARCH_VALUE, payload: searchValue });
    }, [dispatch, searchValue]);

    const onKeyDown = (key: React.KeyboardEvent<HTMLDivElement>) => {
        key.code === "Enter" && onSearch();
    };

    useEffect(() => {
        localStorage.setItem("searchValue", state.searchValue);
        localStorage.setItem("currentPage", String(state.currentPage));
    }, [state.searchValue, state.currentPage]);

    return (
        <TextField
            id="search"
            label="search"
            variant="outlined"
            value={searchValue}
            onChange={onSearchChange}
            onKeyDown={onKeyDown}
            sx={{ mt: 2, width: "100%" }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={onSearch}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};
