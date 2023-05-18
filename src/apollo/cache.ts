import { InMemoryCache } from "@apollo/client";
import { currentPage, searchValue, totalPages } from "./variables";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                searchValue: {
                    read() {
                        return searchValue();
                    },
                },
                currentPage: {
                    read() {
                        return currentPage();
                    },
                },
                totalPages: {
                    read() {
                        return totalPages();
                    },
                },
            },
        },
    },
});

export default cache;
