import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../ui/theme";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {CacheProvider} from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2"
import {Typography} from "@mui/material"
import Sidebar from "../ui/Sidebar";

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
                        <Sidebar/>
                        <Grid xs={12} sm={12} md={10} lg={10} xl={10} sx={{backgroundColor: "secondary.main"}}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>portfolio</Typography>
                            {children}
                        </Grid>
                    </Grid>

                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;