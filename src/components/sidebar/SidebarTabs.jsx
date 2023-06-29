import {useContext} from "react";
import {Tabs, Tab} from "@mui/material";
import {grey} from "@mui/material/colors";

import MainContext from "../../context";
import {tabsData} from "../data/tabsData.sidebar"

const SidebarTabs = () => {
    const {pageNumber, handlePageNumber, setDrawerOpen} =
        useContext(MainContext);

    const data = tabsData();
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            alloScrollButtonMobile
            value={pageNumber}
            onChange={handlePageNumber}
            sx={{textAlign:"start", justifyContent:"center"}}
        >
            {
                data.map((tab, index) => (
                        <Tab
                            key={index}
                            label={tab.label}
                            icon={tab.icon}
                            iconPosition="start"
                            sx={{
                                color: "whitesmoke",
                                "&.MuiTab-root": {
                                    minHeight: 50
                                },
                                textAlign:"start",
                                justifyContent:"center"
                            }}
                            onClick={() => setDrawerOpen(false)}
                            {...tab}
                        />
                    )
                )
            }
        </Tabs>
    );
};

export default SidebarTabs;
