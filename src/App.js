import {ThemeProvider, createTheme} from "@mui/material/styles"
import {Box, Button, Fab, Fade, Typography} from "@mui/material"
import createCache from "@emotion/cache"
import {prefixer} from "stylis"
import Header from "./components/ui/header";
import MainLayout from "./components/layouts/MainLayout";
import rtlPlugin from "stylis-plugin-rtl";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import {useState} from "react"

import TabPanel from "./components/tabs/TabPanel";

function App() {
    const cacheRTL = createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin]
    });

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <MainLayout cacheRTL={cacheRTL}>
            <Sidebar value={value} handleChange={handleChange}/>
            <ContentContainer value={value}>
                <TabPanel value={value} index={0}>
                    <Typography variant="h5" sx={{textAlign: "center"}}>
                        Main page
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <Typography variant="h5" sx={{textAlign: "center"}}>
                        About page
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={2}>
                    <Typography variant="h5" sx={{textAlign: "center"}}>
                        Resume page
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <Typography variant="h5" sx={{textAlign: "center"}}>
                        Works page
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={4}>
                    <Typography variant="h5" sx={{textAlign: "center"}}>
                        Opinions page
                    </Typography>
                </TabPanel>

                <TabPanel value={value} index={5}>
                    <Typography variant="h5" sx={{textAlign: "center"}}>
                        Contact page
                    </Typography>
                </TabPanel>

            </ContentContainer>
        </MainLayout>
    );
}

export default App;
