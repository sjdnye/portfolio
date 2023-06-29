import {Avatar, Box, Typography} from "@mui/material";

import avatar from "../../assets/logo.svg"

const SidebarHeader = () => {
    return (
        <>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: 150,
                    width: 150,
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                }}
            >
                <Box
                    sx={{
                        display:"flex",
                        flexDirection:"column",
                        height:150,
                        justifyContent:"center"
                    }}
                >
                    SB
                </Box>
            </Avatar>
            <Typography variant="h6" color="whitesmoke" sx={{mt:1}}>
                Saji
            </Typography>

            <Typography variant="caption" color="whitesmoke">
                Programmer
            </Typography>
        </>
    );
};

export default SidebarHeader;
