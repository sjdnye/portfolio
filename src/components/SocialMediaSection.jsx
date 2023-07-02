import {Box, IconButton} from "@mui/material";
import {socialMediaInfo} from "../constants/socialMediaInfo";


const SocialMediaSection = () => {
    return(
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
            {
                socialMediaInfo.map(social => (
                    <IconButton aria-label={social["aria-label"]}>
                        <a href={social.link} target={"_blank"} rel={"noopener noreferrer"}>
                            {social.icon}
                        </a>
                    </IconButton>
                ))
            }
            {/*<IconButton aria-label={"GitHub"}>*/}
            {/*    <a href={"https://github.com/sjdnye"} target={"_blank"} rel={"noopener noreferrer"}>*/}
            {/*        <GitHub sx={{color: "gray"}}/>*/}
            {/*    </a>*/}
            {/*</IconButton>*/}
            {/*<IconButton aria-label={"Instagram"}>*/}
            {/*    <a href={"https://instagram.com/_sjdnye_"} target={"_blank"} rel={"noopener noreferrer"}>*/}
            {/*        <Instagram sx={{color: "gray"}}/>*/}
            {/*    </a>*/}
            {/*</IconButton>*/}
            {/*<IconButton aria-label={"Telegram"}>*/}
            {/*    <a href={"https://telegram.com/sjdnye"} target={"_blank"} rel={"noopener noreferrer"}>*/}
            {/*        <Telegram sx={{color: "gray"}}/>*/}
            {/*    </a>*/}
            {/*</IconButton>*/}
        </Box>
    );
}

export default SocialMediaSection;