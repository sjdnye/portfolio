import {createTheme} from "@mui/material/styles";


export const theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir, roboto",
        button: {
            fontFamily: "tahoma"
        }
    },
    pallete: {
        mode: "dark",
        primary: {
            main: "#8be9fd"
        },
        secondary: {
            main: "#bd93f9"
        }
    },
    // components: {
    //     MuiButtonBase: {
    //         defaultProps: {
    //             disableRipple: true
    //         }
    //     }
    // }
})