import React, { useCallback, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { searchValue } from "../../../apollo/variables";

export const SearchField: React.FC = () => {
    const [currentSearchValue, setCurrentSearchValue] = useState("");

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentSearchValue(e.target.value);
    };

    const onSearch = useCallback(() => {
        searchValue(currentSearchValue);
    }, [currentSearchValue]);

    const onKeyDown = (key: React.KeyboardEvent<HTMLDivElement>) => {
        key.code === "Enter" && onSearch();
    };

    return (
        <TextField
            id="search"
            label="search"
            variant="outlined"
            value={currentSearchValue}
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
