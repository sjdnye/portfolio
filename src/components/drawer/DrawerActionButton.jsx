import {useContext} from "react";

import {Fab, Box} from "@mui/material";
import {MenuRounded} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

import MainContext from "../../context";

const DrawerActionButton = () => {
    const {setDrawerOpen} = useContext(MainContext);

    return (
        <Box
            sx={{
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none",
                },
                position: "absolute"
            }}
        >
            <Fab
                aria-label="Sidebar"
                size="small"
                onClick={() => setDrawerOpen(true)}
                sx={{backgroundColor: grey[600], color: "white", m: 2}}
            >
                <MenuRounded/>
            </Fab>
        </Box>
    );
};

export default DrawerActionButton;
