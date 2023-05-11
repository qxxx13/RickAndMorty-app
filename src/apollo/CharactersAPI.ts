import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query getCharacters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            info {
                count
                pages
            }
            results {
                id
                name
                image
                gender
                status
                species
            }
        }
    }
`;
