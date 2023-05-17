import { makeVar, gql } from "@apollo/client";

export const searchValue = makeVar("");

export const GET_SEARCH_VALUE = gql`
    query getSearchValue {
        searchValue @client
    }
`;
