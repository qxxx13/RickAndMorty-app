import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { useQuery } from "@apollo/client";

import { SearchField } from "./SearchField/SearchField";
import { PaginationComponent } from "./Pagination/PaginationComponent";
import { GetCurrentPageModel, GetSearchValueModel } from "../../models/VariablesModel";
import { GET_CURRENT_PAGE, GET_SEARCH_VALUE, totalPages } from "../../apollo/variables";
import { CharactersModel } from "../../models/CharactersModel";
import { GET_CHARACTERS, GET_CHARACTERS_INFO } from "../../apollo/CharactersAPI";
import { CharacterList } from "./CharacterList/CharacterList";
import { CharactersInfoModel } from "../../models/CharactersInfoModel";

export const CharacterPage: React.FC = () => {
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

    const { data: charactersInfoData } = useQuery<CharactersInfoModel>(GET_CHARACTERS_INFO, {
        variables: {
            filter: {
                name: searchValueData?.searchValue,
            },
        },
    });

    useEffect(() => {
        totalPages(charactersInfoData?.characters.info.pages);
    }, [charactersInfoData?.characters.info.pages]);

    return (
        <Container>
            <SearchField />
            {!!charactersInfoData?.characters.info.pages && <PaginationComponent currentPageData={currentPageData} />}
            <CharacterList data={data} loading={loading} />
        </Container>
    );
};
