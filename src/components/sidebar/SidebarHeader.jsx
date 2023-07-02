import {useState} from "react"
import {Typography} from "@mui/material";

import {RandomReveal} from "react-random-reveal";
import avatar from "../../assets/logo.svg"
import ThemeActionButton from "../ThemeActionButton";
import {CustomAvatar} from "../common"
import SocialMediaSection from "../SocialMediaSection";


const SidebarHeader = () => {

    const [start, setStart] = useState(false)
    return (
        <>
            <ThemeActionButton/>
            <CustomAvatar
                avatar={avatar}
                size={150}
                fallback={"SB"}
            />
            <Typography
                variant="h6"
                color="text.primary"
                sx={{mt: 1}}>
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
            <SocialMediaSection/>
        </>
    );
};

export default SidebarHeader;
