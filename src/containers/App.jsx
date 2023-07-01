import {useEffect, useState} from "react";

import {Box, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles"
import SwipeableViews from "react-swipeable-views";


import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import {DrawerActionButton} from "../components/drawer";
import {Home, About, Resume} from "../pages";

function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp])

    const handlePageNumber = (event, newPage) => {
        console.log(newPage);
        setPageNumber(newPage);
    };

    return (
        <MainContext.Provider
            value={{pageNumber, handlePageNumber, drawerOpen, setDrawerOpen}}
        >
            <MainLayout>
                <SidebarContainer>
                    <Sidebar/>
                </SidebarContainer>
                <DrawerActionButton/>
                <PagesContainer>
                    <SwipeableViews
                        axis="x"
                        index={pageNumber}
                        onChangeIndex={handlePageNumber}
                    >
                        <Page pageNumber={pageNumber} index={0}>
                            <Home helmetTitle={"وب سایت شخصی سجی"}/>
                        </Page>
                        <Page pageNumber={pageNumber} index={1}>
                            <About helmetTitle={"درباره من"}/>
                        </Page>
                        <Page pageNumber={pageNumber} index={2}>
                            <Resume helmetTitle={"صفحه رزومه"}/>
                        </Page>
                        <Page pageNumber={pageNumber} index={3}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                نمونه کارها
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={4}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                نظرات دانشجویان
                            </Typography>
                        </Page>
                        <Page pageNumber={pageNumber} index={5}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>
                                ارتباط با من
                            </Typography>
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default App;
