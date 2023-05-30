import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
    query getCharacters($page: Int, $filter: FilterCharacter) {
        characters(page: $page, filter: $filter) {
            results {
                id
                name
                image
                gender
                status
                species
                episode {
                    id
                    name
                }
            }
        }
    }
`;

export const GET_CHARACTERS_INFO = gql`
    query getCharactersInfo($filter: FilterCharacter) {
        characters(filter: $filter) {
            info {
                pages
            }
        }
    }
`;
