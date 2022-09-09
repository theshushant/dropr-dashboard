import React from 'react';
import {RootStore} from "../../stores/RootStore";
import {StyledToastContainer} from "../../utils/globals";
import { createTheme } from "@material-ui/core";
import {
    StylesProvider,
    ThemeProvider as MaterialThemeProvider,
} from "@material-ui/styles";
import {Provider} from "mobx-react";
import {ThemeProvider} from "styled-components";
import {Zoom} from "react-toastify";
import Login from "../login/Login";

const theme = {
    colors: {
        primaryColor: "rgb(223, 110, 81)",
        droprPrimaryBackgroundColor: "rgba(223, 110, 81, 0.05)",
        secondaryColor: "rgba(223, 110, 81, 1)",
        orangeColor: "rgb(226, 154, 46)",


        primaryDarkColor: "rgb(20,155,165)",
        surfSideRedColor: "rgb(206,16,61)",
        surfSideBlueColor: "rgb(0,47,84)",
        whiteColor: "rgb(255,255,255)",
        whiteColorOpacity: "rgba(255,255,255,0.7)",
        blackColor: "rgb(29,29,29)",
        greenColor: "rgb(16,206,79)",
        greyDarkColor: "rgb(126,126,126)",
        greyColor: "rgb(217,217,217)",
        greyLightColor: "rgb(245,245,245)",
        greyShadowColor: "rgb(240,239,255)",
        blackColorOpacity2: "rgba(29,29,29,0.2)",
        blackColorOpacity5: "rgba(34, 37, 41, 0.75)",
        dividerColor: "rgba(112, 112, 112, 1)",
    },
    material: {
        primary: {
            50: "#e2f8f9",
            100: "#b7ecf0",
            200: "#88e0e7",
            300: "#58d4dd",
            400: "#34cad5",
            500: "#10c1ce",
            600: "#0ebbc9",
            700: "#0cb3c2",
            800: "#09abbc",
            900: "#059eb0",
            A100: "#dbfbff",
            A200: "#a8f4ff",
            A400: "#75eeff",
            A700: "#5bebff",
            contrastDefaultColor: "dark",
        },
        secondary: {
            50: "#fcf3e6",
            100: "#f6e1c0",
            200: "#f1cd97",
            300: "#ebb86d",
            400: "#e6a94d",
            500: "#e29a2e",
            600: "#df9229",
            700: "#da8823",
            800: "#d67e1d",
            900: "#cf6c12",
            A100: "#fffefd",
            A200: "#ffe2ca",
            A400: "#ffc597",
            A700: "#ffb77e",
            contrastDefaultColor: "dark",
        },
        warning: {
            50: "#f9e2e8",
            100: "#f0b7c5",
            200: "#e7889e",
            300: "#dd5877",
            400: "#d5345a",
            500: "#ce103d",
            600: "#c90e37",
            700: "#c20c2f",
            800: "#bc0927",
            900: "#b0051a",
            A100: "#ffdbdd",
            A200: "#ffa8ae",
            A400: "#ff757f",
            A700: "#ff5b68",
            contrastDefaultColor: "light",
        },
    },
};

type Theme = typeof theme;

const materialTheme = createTheme({
    palette: {
        type: "light",
        primary: theme.material.primary,
        secondary: theme.material.secondary,
        warning: theme.material.warning,
    },
    typography: {
        fontFamily: "niveau-grotesk, sans-serif",
        fontWeightBold: 700,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                html: {
                    WebkitFontSmoothing: "antialiased",
                },
            },
        },
        MuiInput: {
            input: {
                fontSize: "1.125rem",
                fontWeight: "bold",
                width: "100%",
                "&::placeholder": {
                    fontWeight: "normal",
                    color: "#7E7E7E",
                    opacity: "1.0",
                },
            },
        },
        MuiSelect: {
            select: {
                width: "100%",
                fontSize: "1.125rem",
                fontWeight: "bold",
            },
        },
    },
});

export interface GlobalProps {
    theme: Theme;
    store?: RootStore;
}


const App: React.FC = () => (
    <MaterialThemeProvider theme={materialTheme}>
      <ThemeProvider theme={theme}>
        <Provider store={RootStore.getInstance()}>
          <StylesProvider injectFirst>
            <StyledToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                closeButton={false}
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                transition={Zoom}
            />
            <Login />
          </StylesProvider>
        </Provider>
      </ThemeProvider>
    </MaterialThemeProvider>
);

export default App;
