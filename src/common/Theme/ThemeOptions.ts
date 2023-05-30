import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#009a2a",
        },
        secondary: {
            main: "#00ff4c",
        },
        background: {
            default: "#00160a",
            paper: "#03a32e",
        },
        info: {
            main: "#007f29",
        },
    },
});
