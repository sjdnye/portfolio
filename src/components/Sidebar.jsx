import Grid from "@mui/material/Unstable_Grid2";
import {Typography, Avatar, Divider, Box, Hidden, Tabs, Tab} from "@mui/material";
import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
    FavoriteRounded,
    CopyrightRounded
} from "@mui/icons-material"
import {grey} from "@mui/material/colors"

const Sidebar = ({value, handleChange}) => {

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    }
    return (
        <Grid xs={0} sm={0} md={2} lg={2} xl={2}
              sx={{backgroundColor: grey[900]}}>
            <Box
                sx={{
                    justifyContent: "center",
                    textAlign: "center",
                    mt: 2
                }}>
                <Hidden mdDown>
                    <Avatar
                        src="../assets/logo.svg"
                        variant="rounded"
                        sx={{height: 200, width: 200, margin: "0 auto"}}
                    >
                        SB
                    </Avatar>
                </Hidden>
                <Typography variant="h6" color="whitesmoke" sx={{mt: 1}}>Saji</Typography>
                <Typography variant="caption" color="whitesmoke">Programmer</Typography>
                <Divider variant="middle" color={grey[600]} sx={{mt: 2}}/>

                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    scrollButton="auto"
                    alloScrollButtonMobile
                    value={value}
                    onChange={handleChange}
                >
                    <Tab
                        label="Home"
                        icon={<HomeRounded/>}
                        iconPosition="start"
                        sx={{color: "whitesmoke"}}
                        {...tabProps(0)}
                    />
                    <Tab
                        label="About"
                        icon={<FaceRounded/>}
                        iconPosition="start"
                        sx={{color: "whitesmoke"}}
                        {...tabProps(1)}

                    />
                    <Tab
                        label="Resume"
                        icon={<TextSnippetRounded/>}
                        iconPosition="start"
                        sx={{color: "whitesmoke"}}
                        {...tabProps(2)}
                    />
                    <Tab
                        label="Works"
                        icon={<TerminalRounded/>}
                        iconPosition="start"
                        sx={{color: "whitesmoke"}}
                        {...tabProps(3)}
                    />
                    <Tab
                        label="Opinions"
                        icon={<MessageRounded/>}
                        iconPosition="start"
                        sx={{color: "whitesmoke"}}
                        {...tabProps(4)}
                    />
                    <Tab
                        label="Contact me"
                        icon={<ConnectWithoutContactRounded/>}
                        iconPosition="start"
                        sx={{color: "whitesmoke"}}
                        {...tabProps(5)}
                    />
                </Tabs>
                <Divider variant="middle" color={grey[600]} sx={{mt: 2}}/>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "end",
                        alignItems: "center",
                        height: 100
                    }}
                >
                    <Typography variant="subtitle2" color="whitesmoke">
                        Designed by {" "}
                        <FavoriteRounded sx={{verticalAlign: "middle", color: "tomato", height: 20}}/>
                    </Typography>
                    <Typography variant="caption" color="whitesmoke" sx={{mt: 2}}>
                        Copyright 2023 {" "}
                        <CopyrightRounded sx={{verticalAlign: "middle", height: 16}}/>
                    </Typography>

                </Box>
            </Box>
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