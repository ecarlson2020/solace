import { createTheme } from "@mui/material/styles";
// grey
const lightText = "#34423a";
const darkText = "#eee";
// orange
const orange = "rgb(241, 93, 34)";
// green
const greenLightTheme = "#119944";
const greenDarkTheme = "#2fb040";
// bg
const lightBg = "#fff";
const lightBg2 = "#f8f8f8";
const darkBg = "#333";
const darkBg2 = "#444";
// box shadow
const boxShadowLightTheme = "#b3b3b3";
const boxShadowDarkTheme = darkBg2;
// border
const borderLightTheme = "#e6e6e6";
const borderDarkTheme = "#393939";
// gradients
const lightGradient = "rgb(0 0 0 / 0.4)";
const darkGradient = "rgb(0 0 0 / 0.60)";

// fonts
const font1 = "Barlow Semi Condensed";

declare module "@mui/material/styles" {
  interface PaletteColor {
    bg: string;
    bg2: string;
    text: string;
    gradient: string;
    green: string;
    boxShadow: string;
    border: string;
  }
}

const lightThemeObj = {
  palette: {
    primary: {
      main: orange,
      bg: lightBg,
      bg2: lightBg2,
      text: lightText,
      gradient: lightGradient,
      green: greenLightTheme,
      boxShadow: boxShadowLightTheme,
      border: borderLightTheme,
    },
    secondary: {
      main: greenLightTheme,
    },
    tertiary: {
      main: lightText,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "rgb(140 152 164 / 25%) 0px 3px 6px 0px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "rgb(140 152 164 / 18%) 0px 10px 40px 10px",
          background: lightBg,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: font1,
          color: lightText,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "3px 18px",
        },
      },
    },
  },
  typography: {
    h1: {
      color: lightText,
      fontSize: "36px",
      fontWeight: 700,
      textTransform: "uppercase" as const,
      fontFamily: font1,
      lineHeight: 1.2,
    },
    h2: {
      color: lightText,
      fontSize: "32px",
      fontWeight: 700,
      fontFamily: font1,
      lineHeight: 1.2,
    },
    h3: {
      color: lightText,
      fontSize: "1.8rem",
      fontFamily: font1,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      color: greenLightTheme,
      fontSize: "24px",
      fontFamily: font1,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      color: orange,
      fontSize: "20px",
      textTransform: "uppercase" as const,
      fontFamily: font1,
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      color: lightText,
      fontSize: "18px",
      fontFamily: font1,
      fontWeight: "bold",
      lineHeight: 1.8,
    },
    body1: {
      color: lightText,
      fontSize: "18px",
      lineHeight: "1.8",
      display: "block",
      fontFamily: font1,
    },
    body2: {
      color: greenLightTheme,
      lineHeight: "1.5",
      display: "block",
      fontFamily: font1,
      textTransform: "uppercase" as const,
      fontWeight: 700,
    },
    subtitle1: {
      color: lightText,
    },
    subtitle2: {
      color: lightText,
    },
    button: {
      fontWeight: 700,
      fontSize: "18px",
      textTransform: "none" as const,
      fontFamily: font1,
    },
  },
};

const darkThemeObj = JSON.parse(JSON.stringify(lightThemeObj));
darkThemeObj.palette.primary.bg = darkBg;
darkThemeObj.palette.primary.bg2 = darkBg2;
darkThemeObj.palette.primary.text = darkText;
darkThemeObj.palette.primary.gradient = darkGradient;
darkThemeObj.palette.primary.green = greenDarkTheme;
darkThemeObj.palette.primary.boxShadow = boxShadowDarkTheme;
darkThemeObj.palette.primary.border = borderDarkTheme;
darkThemeObj.palette.secondary.main = greenDarkTheme;
darkThemeObj.palette.tertiary.main = darkText;
darkThemeObj.typography.h1.color = darkText;
darkThemeObj.typography.h2.color = darkText;
darkThemeObj.typography.h3.color = darkText;
darkThemeObj.typography.h4.color = greenDarkTheme;
darkThemeObj.typography.h6.color = darkText;
darkThemeObj.typography.body1.color = darkText;
darkThemeObj.typography.body2.color = greenDarkTheme;
darkThemeObj.components.MuiCard.styleOverrides.root.background = darkBg;
darkThemeObj.components.MuiInputBase.styleOverrides.root.color = darkText;

export const lightTheme = createTheme(lightThemeObj);
export const darkTheme = createTheme(darkThemeObj);
