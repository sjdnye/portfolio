import {useState} from "react"
import {Avatar, Box, Typography, IconButton} from "@mui/material";
import {RandomReveal} from "react-random-reveal";

import avatar from "../../assets/logo.svg"
import {alphabetPersian} from "../../constants/alphabetPersian"
import {GitHub, Telegram, Instagram} from "@mui/icons-material"

const SidebarHeader = () => {

    const [start, setStart] = useState(false)
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
                        display: "flex",
                        flexDirection: "column",
                        height: 150,
                        justifyContent: "center"
                    }}
                >
                    SB
                </Box>
            </Avatar>
            <Typography variant="h6" color="whitesmoke" sx={{mt: 1}}>
                <RandomReveal
                    isPlaying={true}
                    characters={"Saji"}
                    duration={4}
                    onComplete={() => setStart(true)}
                    // characterSet={alphabetPersian}
                />
            </Typography>
            {start &&
                (
                    <Typography variant="caption" color="gray">
                        <RandomReveal
                            isPlaying={true}
                            characters={"Programmer"}
                            duration={2}
                            // characterSet={alphabetPersian}
                        />
                    </Typography>
                )
            }

            <Box
                compoenent={"div"}
                sx={{
                    mt: 2,
                    m: "0 auto",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <IconButton aria-label={"GitHub"}>
                    <a href={"https://github.com/sjdnye"} target={"_blank"} rel={"noopener noreferrer"}>
                        <GitHub sx={{color: "gray"}}/>
                    </a>
                </IconButton>
                <IconButton aria-label={"Instagram"}>
                    <a href={"https://instagram.com/_sjdnye_"} target={"_blank"} rel={"noopener noreferrer"}>
                        <Instagram sx={{color: "gray"}}/>
                    </a>
                </IconButton>
                <IconButton aria-label={"Telegram"}>
                    <a href={"https://telegram.com/sjdnye"} target={"_blank"} rel={"noopener noreferrer"}>
                        <Telegram sx={{color: "gray"}}/>
                    </a>
                </IconButton>
            </Box>
        </>
    );
};

export default SidebarHeader;
