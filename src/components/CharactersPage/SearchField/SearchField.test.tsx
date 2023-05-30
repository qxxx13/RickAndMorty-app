import { fireEvent, render, screen } from "@testing-library/react";
import { SearchField } from "./SearchField";

describe("SearchField component", () => {
    it("SearchField render", () => {
        render(<SearchField />);

        expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    });

    it("Search btn works", () => {
        render(<SearchField />);
        const btn = screen.getByRole("button");
        fireEvent.click(btn);
    });
});
