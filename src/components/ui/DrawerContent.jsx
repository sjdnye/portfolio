import {Avatar, Box, Divider, Hidden, Tab, Tabs, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {
    ConnectWithoutContactRounded, CopyrightRounded,
    FaceRounded, FavoriteRounded,
    HomeRounded,
    MessageRounded,
    TerminalRounded,
    TextSnippetRounded
} from "@mui/icons-material";

const DrawerContent = ({value, handleChange, setDrawerOpen}) => {

    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`
        }
    }
    return (
        <Box
            sx={{
                backgroundColor: grey[900],
                justifyContent: "center",
                textAlign: "center",
                mt: 2,
            }}
        >
            <Avatar
                src="../../assets/logo.svg"
                variant="rounded"
                sx={{
                    height: 150, width: 150, margin: "0 auto", display: {
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                        xl: "block"
                    }
                }
                }
            >
            < /Avatar>

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
                    sx={{color: "whitesmoke",
                        "&.MuiTab-root": {
                            minHeight: 50
                        }}}
                    {...tabProps(1)}
                    onClick={() => setDrawerOpen(false)}
                />
                <Tab
                    label="Resume"
                    icon={<TextSnippetRounded/>}
                    iconPosition="start"
                    sx={{color: "whitesmoke",
                        "&.MuiTab-root": {
                            minHeight: 50
                        }}}
                    {...tabProps(2)}
                    onClick={() => setDrawerOpen(false)}
                />
                <Tab
                    label="Works"
                    icon={<TerminalRounded/>}
                    iconPosition="start"
                    sx={{color: "whitesmoke",
                        "&.MuiTab-root": {
                            minHeight: 50
                        }}}
                    {...tabProps(3)}
                    onClick={() => setDrawerOpen(false)}
                />
                <Tab
                    label="Opinions"
                    icon={<MessageRounded/>}
                    iconPosition="start"
                    sx={{color: "whitesmoke",
                        "&.MuiTab-root": {
                            minHeight: 50
                        }}}
                    {...tabProps(4)}
                    onClick={() => setDrawerOpen(false)}
                />
                <Tab
                    label="Contact me"
                    icon={<ConnectWithoutContactRounded/>}
                    iconPosition="start"
                    sx={{color: "whitesmoke",
                        "&.MuiTab-root": {
                            minHeight: 50
                        }}}
                    {...tabProps(5)}
                    onClick={() => setDrawerOpen(false)}
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
    );
}


export default DrawerContent