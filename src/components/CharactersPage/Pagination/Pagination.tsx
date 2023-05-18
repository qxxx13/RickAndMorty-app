import React, { useCallback } from "react";
import { Stack, Pagination } from "@mui/material";

import { CharactersModel } from "../../../models/CharactersModel";
import { GetCurrentPageModel } from "../../../models/VariablesModel";
import { currentPage } from "../../../apollo/variables";

type PaginationComponentProps = {
    data?: CharactersModel;
    currentPageData?: GetCurrentPageModel;
};

export const PaginationComponent: React.FC<PaginationComponentProps> = ({ data, currentPageData }) => {
    const onPaginationChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
        currentPage(page);
    }, []);

    return (
        <Stack justifyContent="center" flexDirection="row" sx={{ padding: "16px 0 16px 0" }}>
            <Pagination
                count={data?.characters.info.pages}
                onChange={onPaginationChange}
                page={currentPageData?.currentPage}
            />
        </Stack>
    );
};
