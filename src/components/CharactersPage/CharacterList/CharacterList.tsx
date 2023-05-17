import React, { useContext } from "react";
import { useMemo, useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../../../apollo/CharactersAPI";
import { CircularProgress, Container, Pagination, Stack } from "@mui/material";
import { CharacterListItem } from "./CharacterListItem/CharacterListItem";
import { CharacterItemModel } from "../../../models/CharacterItemModel";
import { SearchField } from "../SearchField/SearchField";
import { CharactersModel } from "../../../models/CharactersModel";
import { AppContext } from "../../../context/AppContext";
import { ActionType } from "../../../context/Actions";
import { GET_SEARCH_VALUE } from "../../../apollo/variables";
import { GetSearchValueModel } from "../../../models/VariablesModel";

export const CharacterList: React.FC = () => {
    const { state, dispatch } = useContext(AppContext);

    const { data: searchValueData } = useQuery<GetSearchValueModel>(GET_SEARCH_VALUE);

    const { loading, data } = useQuery<CharactersModel>(GET_CHARACTERS, {
        variables: {
            page: state.currentPage,
            filter: {
                name: searchValueData?.searchValue,
            },
        },
    });

    const onPaginationChange = useCallback(
        (event: React.ChangeEvent<unknown>, page: number) => {
            dispatch({ type: ActionType.SET_CURRENT_PAGE, payload: page });
        },
        [dispatch]
    );

    const CharacterList = useMemo(() => {
        if (!loading)
            return data?.characters.results.map((character: CharacterItemModel) => (
                <CharacterListItem character={character} key={character.id} />
            ));
    }, [data, loading]);

    useEffect(() => {
        localStorage.setItem("currentPage", String(state.currentPage));
    }, [state.currentPage]);

    return (
        <Container>
            <SearchField />
            <Stack justifyContent="center" flexDirection="row" sx={{ padding: "16px 0 16px 0" }}>
                <Pagination
                    count={data?.characters.info.pages}
                    onChange={onPaginationChange}
                    page={state.currentPage}
                />
            </Stack>
            <Stack alignItems="center">{!loading ? CharacterList : <CircularProgress />}</Stack>
        </Container>
    );
};
