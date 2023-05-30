import { render, screen } from "@testing-library/react";
import { CharacterList } from "./CharacterList";

const data = {
    characters: {
        info: {
            count: 1,
            pages: 1,
        },
        results: [
            {
                id: "1",
                name: "Test",
                image: "string",
                gender: "string",
                status: "string",
                species: "string",
                episode: [
                    {
                        id: "string",
                        name: "string",
                    },
                ],
            },
        ],
    },
};

describe("CharacterList component", () => {
    it("CharacterList render", () => {
        render(<CharacterList loading={false} data={data} />);

        expect(screen.getByRole("img")).toBeInTheDocument();
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("CharacterList render without data", () => {
        render(<CharacterList loading={false} />);

        expect(screen.queryByRole("img")).toBeNull();
    });

    it("CharacterList snapshot", () => {
        const view = render(<CharacterList loading={false} data={data} />);

        expect(view).toMatchSnapshot();
    });

    it("CharacterList epmty snapshot", () => {
        const view = render(<CharacterList loading={false} />);

        expect(view).toMatchSnapshot();
    });
});
