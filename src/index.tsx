import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./common/Theme/ThemeOptions";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={themeOptions}>
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);