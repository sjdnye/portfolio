import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../ui/theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {CacheProvider} from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2"
import {Typography} from "@mui/material"
import Sidebar from "../Sidebar";
import ContentContainer from "../ContentContainer";

const MainLayout = ({cacheRTL, children}) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>وب سایت شخصی سجی</title>
                    </Helmet>
                    {/* Grid System */}
                    <Grid container sx={{height: "100vh"}}>
                        {children}
                    </Grid>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;