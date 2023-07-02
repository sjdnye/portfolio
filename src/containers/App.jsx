import {useEffect, useState} from "react";

import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles"
import SwipeableViews from "react-swipeable-views";


import MainLayout from "../layouts/MainLayout";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import {Page} from "../components/pages";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import {DrawerActionButton} from "../components/drawer";
import {Home, About, Resume, MyProjects, Comment, Contact} from "../pages";

function App() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    let [mode, setMode] = useState()

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
    const preferesDarkMode = useMediaQuery('(prefers-color-schema: dark');

    useEffect(() => {
        setMode(preferesDarkMode ? "dark" : "light");
    }, [])


    useEffect(() => {
        if (isMdUp) {
            setDrawerOpen(false);
        }
    }, [isMdUp])

    const handlePageNumber = (event, newPage) => {
        console.log(newPage);
        setPageNumber(newPage);
    };

    const handleThemeMode = () => {
        setMode(prevMode => prevMode === "dark" ? "light" : "dark");
    }

    return (
        <MainContext.Provider
            value={{pageNumber, handlePageNumber, handleThemeMode, drawerOpen, setDrawerOpen}}
        >
            <MainLayout mode={mode}>
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
                            <MyProjects helmetTitle={"دوره های من"}/>
                        </Page>
                        <Page pageNumber={pageNumber} index={4}>
                            <Comment helmetTitle={"صفحه نظرات"}/>
                        </Page>
                        <Page pageNumber={pageNumber} index={5}>
                            <Contact helmetTitle={"ارتباط با من"}/>
                        </Page>
                    </SwipeableViews>
                </PagesContainer>
            </MainLayout>
        </MainContext.Provider>
    );
}

export default App;
