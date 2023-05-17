import { InMemoryCache } from "@apollo/client";
import { searchValue } from "./variables";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                searchValue: {
                    read() {
                        return searchValue();
                    },
                },
            },
        },
    },
});

export default cache;
