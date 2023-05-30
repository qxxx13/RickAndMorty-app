import React, { useCallback } from "react";
import { Stack, Pagination } from "@mui/material";
import { useQuery } from "@apollo/client";

import { GetCurrentPageModel, GetTotalPages } from "../../../models/VariablesModel";
import { GET_TOTAL_PAGES, currentPage } from "../../../apollo/variables";

type PaginationComponentProps = {
    currentPageData?: GetCurrentPageModel;
};

export const PaginationComponent: React.FC<PaginationComponentProps> = ({ currentPageData }) => {
    const { data: totalPagesData } = useQuery<GetTotalPages>(GET_TOTAL_PAGES);

    const onPaginationChange = useCallback((event: React.ChangeEvent<unknown>, page: number) => {
        currentPage(page);
    }, []);

    return (
        <Stack justifyContent="center" flexDirection="row" sx={{ padding: "16px 0 16px 0" }}>
            <Pagination
                count={totalPagesData?.totalPages}
                onChange={onPaginationChange}
                page={currentPageData?.currentPage}
            />
        </Stack>
    );
};
