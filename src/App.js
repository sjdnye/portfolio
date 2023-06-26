
import {ThemeProvider, createTheme} from "@mui/material/styles"
import {Box, Button, Fab, Fade} from "@mui/material"
import createCache from "@emotion/cache"
import {prefixer} from "stylis"
import Header from "./components/ui/header";
import MainLayout from "./components/layouts/MainLayout";
import rtlPlugin from "stylis-plugin-rtl";
function App() {
    const cacheRTL = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    })
    return (
        <MainLayout cacheRTL={cacheRTL}>
        </MainLayout>
    );
}

export default App;
