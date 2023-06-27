import Grid from "@mui/material/Unstable_Grid2";
import {
    Typography,
    Avatar,
    Divider,
    Box,
    Hidden,
    Tabs,
    Tab,
    Drawer,
    SwipeableDrawer,
    Fab
} from "@mui/material";
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
    FavoriteRounded,
    CopyrightRounded,
    MenuRounded
} from "@mui/icons-material"
import {grey, red, blue, lightBlue} from "@mui/material/colors"
import {useState} from 'react'
import DrawerContent from "./ui/DrawerContent";

const Sidebar = ({value, handleChange}) => {
    const [drawerOpen, setDrawerOpen] = useState(false)
    return (
        <Grid xs={0} sm={0} md={2} lg={2} xl={2}
              sx={{backgroundColor: grey[900]}}
        >
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none"
                    }
                }
                }
            >
                < Fab
                    aria-label={"Sidebar"}
                    size={"small"}
                    sx={{mx: 2, backgroundColor: grey[700], color: "white", mt: 1}}
                    onClick={() => setDrawerOpen(true)}
                >
                    <MenuRounded/>
                </Fab>
            </Box>
            <DrawerContent value={value} handleChange={handleChange} />
            <Drawer
                open={drawerOpen}
                variant="temporary"
                onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        // width: 300
                        height:1
                    },
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none",
                        xl: "none"
                    },
                    backgroundColor: grey[900]
                }
                }
            >
                <DrawerContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen}/>
            </Drawer>
        </Grid>
    )
}

export default Sidebar;


// <Tab
//     label={
//         <div>
//
//             <Typography variant="subtitle2" color="white">
//                 <HomeRounded sx={{verticalAlign:"middle", mx:2}}/>
//                 Home
//             </Typography>
//
//         </div>
//     }
// />