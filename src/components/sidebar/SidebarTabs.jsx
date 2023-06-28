import { useContext } from "react";

import { Tabs, Tab } from "@mui/material";
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import MainContext from "../../context";

const SidebarTabs = () => {
    const { pageNumber, handlePageNumber, setDrawerOpen } =
        useContext(MainContext);

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };

    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            scrollButton="auto"
            alloScrollButtonMobile
            value={pageNumber}
            onChange={handlePageNumber}
        >
            <Tab
                label="Home"
                icon={<HomeRounded/>}
                iconPosition="start"
                sx={{
                    color: "whitesmoke",
                    "&.MuiTab-root": {
                        minHeight: 50
                    }
                }}
                {...tabProps(0)}
                onClick={() => setDrawerOpen(false)}
            />
            <Tab
                label="About"
                icon={<FaceRounded/>}
                iconPosition="start"
                sx={{
                    color: "whitesmoke",
                    "&.MuiTab-root": {
                        minHeight: 50
                    }
                }}
                {...tabProps(1)}
                onClick={() => setDrawerOpen(false)}
            />
            <Tab
                label="Resume"
                icon={<TextSnippetRounded/>}
                iconPosition="start"
                sx={{
                    color: "whitesmoke",
                    "&.MuiTab-root": {
                        minHeight: 50
                    }
                }}
                {...tabProps(2)}
                onClick={() => setDrawerOpen(false)}
            />
            <Tab
                label="Works"
                icon={<TerminalRounded/>}
                iconPosition="start"
                sx={{
                    color: "whitesmoke",
                    "&.MuiTab-root": {
                        minHeight: 50
                    }
                }}
                {...tabProps(3)}
                onClick={() => setDrawerOpen(false)}
            />
            <Tab
                label="Opinions"
                icon={<MessageRounded/>}
                iconPosition="start"
                sx={{
                    color: "whitesmoke",
                    "&.MuiTab-root": {
                        minHeight: 50
                    }
                }}
                {...tabProps(4)}
                onClick={() => setDrawerOpen(false)}
            />
            <Tab
                label="Contact me"
                icon={<ConnectWithoutContactRounded/>}
                iconPosition="start"
                sx={{
                    color: "whitesmoke",
                    "&.MuiTab-root": {
                        minHeight: 50
                    }
                }}
                {...tabProps(5)}
                onClick={() => setDrawerOpen(false)}
            />
        </Tabs>
    );
};

export default SidebarTabs;
