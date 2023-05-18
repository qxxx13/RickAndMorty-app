import React from "react";
import { Container } from "@mui/material";
import { useQuery } from "@apollo/client";

import { SearchField } from "./SearchField/SearchField";
import { PaginationComponent } from "./Pagination/Pagination";
import { GetCurrentPageModel, GetSearchValueModel } from "../../models/VariablesModel";
import { GET_CURRENT_PAGE, GET_SEARCH_VALUE } from "../../apollo/variables";
import { CharactersModel } from "../../models/CharactersModel";
import { GET_CHARACTERS } from "../../apollo/CharactersAPI";
import { CharacterList } from "./CharacterList/CharacterList";

export const CharacterPage: React.FC = (props) => {
    const { data: searchValueData } = useQuery<GetSearchValueModel>(GET_SEARCH_VALUE);
    const { data: currentPageData } = useQuery<GetCurrentPageModel>(GET_CURRENT_PAGE);

    const { loading, data } = useQuery<CharactersModel>(GET_CHARACTERS, {
        variables: {
            page: currentPageData?.currentPage,
            filter: {
                name: searchValueData?.searchValue,
            },
        },
    });

    return (
        <Container>
            <SearchField />
            <PaginationComponent currentPageData={currentPageData} data={data} />
            <CharacterList data={data} loading={loading} />
        </Container>
    );
};
