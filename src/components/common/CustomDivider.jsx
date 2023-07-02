import {useState, useEffect} from "react"
import {Chip, Divider, Slide, Typography} from "@mui/material";

const CustomDivider = ({textAlign, borderColor, chipColor, chipIcon, chipTitle}) => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])
    return (
        <Slide
            direction="down"
            in={loading}
            style={{
                transitionDelay: loading ? "100ms" : "0ms",
            }}
        >
            <Divider
                textAlign={textAlign}
                sx={{
                    "&::before, &::after": {
                        borderColor: {borderColor},
                    },
                }}
            >
                <Chip
                    color={chipColor}
                    icon={chipIcon}
                    label={
                        <Typography
                            variant="body1"
                            color="black"
                            sx={{textAlign: "center"}}
                        >
                            {chipTitle}
                        </Typography>
                    }
                    sx={{p: 3}}
                />
            </Divider>
        </Slide>
    );
}


export default CustomDivider;