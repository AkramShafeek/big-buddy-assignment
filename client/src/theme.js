// color design tokens export

export const purplePalette = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#ebecfc",
    100: "#cccef7",
    200: "#aaaef1",
    300: "#888deb",
    400: "#6e71e6",
    500: "#5656df",
    600: "#504dd4",
    700: "#4742c7",
    800: "#4036bb",
    900: "#4e44e742",
  },
};

const purpleTheme = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
      ? {
        // palette values for dark mode
        primary: {
            dark: purplePalette.primary[900],
            main: purplePalette.primary[400],
            light: purplePalette.primary[900],
          },
          neutral: {
            dark: purplePalette.grey[100],
            main: purplePalette.grey[200],
            mediumMain: purplePalette.grey[300],
            medium: purplePalette.grey[400],
            light: purplePalette.grey[700],
          },
          background: {
            default: purplePalette.grey[900],
            alt: purplePalette.grey[800],
          },
        }
        : {
          // palette values for light mode
          primary: {
            dark: purplePalette.primary[700],
            main: purplePalette.primary[300],
            light: purplePalette.primary[50],
          },
          neutral: {
            dark: purplePalette.grey[700],
            main: purplePalette.grey[500],
            mediumMain: purplePalette.grey[400],
            medium: purplePalette.grey[300],
            light: purplePalette.grey[10],
          },
          background: {
            default: purplePalette.grey[10],
            alt: purplePalette.grey[0],
          },
        }),
      },
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};


export const themeSettings = purpleTheme;