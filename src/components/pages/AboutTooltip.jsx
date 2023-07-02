import {Chip, Tooltip, Typography, Box} from "@mui/material";
import CountUp from "react-countup";

const AboutTooltip = ({index, title, tooltipPlacement, chipIcon, countUpEnd, chipBackgroundColor}) => {
    return (
        <Box
            key={index}
            component="div"
            sx={{width: 1, mb: 1}}
        >
            <Tooltip
                title={title}
                placement={tooltipPlacement}
                arrow
            >
                <Chip
                    icon={chipIcon}
                    label={
                        <Typography
                            variant="body1"
                            color="whitesmoke"
                        >
                            <CountUp
                                start={0}
                                end={countUpEnd}
                                duration={2}
                            />
                        </Typography>
                    }
                    sx={{
                        p: 2,
                        backgroundColor: chipBackgroundColor,
                        width: 1,
                    }}
                />
            </Tooltip>
        </Box>
    )
}

export default AboutTooltip;