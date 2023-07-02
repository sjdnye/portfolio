import {Divider, Chip, Box, Typography, LinearProgress, Badge} from "@mui/material"


import html from "../../assets/icons/html5-original.svg"
import CustomDivider from "../common/CustomDivider";
import {SelfImprovementRounded} from "@mui/icons-material";

const Skill = ({icon, color, name, value}) => {
    return (
        <>
            <Divider textAlign={"right"}
                     sx={{
                         // "&::before, &::after": {
                         //     borderColor: `${color}.main`
                         // },
                         mt: 2
                     }}
            >
                <Chip
                    icon={
                        <Box
                            component={"img"}
                            src={icon}
                            sx={{height: 30}}
                        />
                    }
                    color={color}
                    label={name}
                    sx={{color: "text.primary", p: 2.5}}
                />
            </Divider>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Box sx={{minWidth: 35, mr: 1}}>
                    <Typography variant={"body2"} color={"text.primary"}>
                        <Badge
                            variant={"standard"}
                            color={color}
                            badgeContent={`${Math.round(value)}%`}
                        />
                    </Typography>


                </Box>
                <Box sx={{width: "100%", mr: 1}}>
                    <LinearProgress
                        variant={"determinate"}
                        value={value}
                        color={color}
                        sx={{height: 2, borderRadius: 2}}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Skill;