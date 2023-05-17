import { makeVar, gql } from "@apollo/client";

export const searchValue = makeVar("");
export const totalPages = makeVar(0);
export const currentPage = makeVar(1);

export const GET_SEARCH_VALUE = gql`
    query getSearchValue {
        searchValue @client
    }
`;

export const GET_TOTAL_PAGES = gql`
    query getTotalPages {
        totalPages @client
    }
`;

export const GET_CURRENT_PAGE = gql`
    query getCurrentPage {
        currentPage @client
    }
`;
