import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#050814",
            paper: "#0A1020",
        },
        primary: {
            main: "#8B5CF6",
        },
        text: {
            primary: "#E2E8F0",
            secondary: "#94A3B8"
        },
    },
    shape: {
        borderRadius: 14,
    },
});

export default theme;