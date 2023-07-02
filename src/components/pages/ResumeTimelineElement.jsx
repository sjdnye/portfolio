import {TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {SchoolRounded} from "@mui/icons-material";
import {devEdu} from "../../constants/details";
import {Typography, Slide} from "@mui/material";
import {useEffect, useState} from "react";

const ResumeTimelineElement = ({index, length, color, icon, year, cert, major, place}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])
    return (
        <Slide
            direction={"up"}
            in={loading}
            style={{transitionDelay: loading ? `${index + 3}99ms` : `0ms`}}
        >
            <TimelineItem key={index}>
                <TimelineSeparator>
                    <TimelineDot
                        color={color}
                        variant="outlined"
                    >
                        {icon}
                    </TimelineDot>
                    {index < length - 1 ? (
                        <TimelineConnector/>
                    ) : null}
                </TimelineSeparator>
                <TimelineContent>
                    <Typography
                        variant="caption"
                        color="gray"
                    >
                        {year}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="black"
                    >
                        {cert}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="black"
                    >
                        {major}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="black"
                    >
                        {place}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Slide>
    )
}

export default ResumeTimelineElement;