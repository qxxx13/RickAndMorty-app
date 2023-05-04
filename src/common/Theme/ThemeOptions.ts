import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#04303f",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#073B4C",
            paper: "#0e7496",
        },
    },
});
