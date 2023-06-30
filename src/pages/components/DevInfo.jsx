import {Typography} from "@mui/material";
import {KeyboardArrowLeftRounded} from "@mui/icons-material";

const DevInfo = ({children}) => {
    return (
        <>
            <Typography
                variant={"body1"}
                color={"whitesmoke"}
                textAlign={"end"}
                sx={{mt: 2}}
            >
                {children}
                <KeyboardArrowLeftRounded
                    sx={{
                        verticalAlign: "bottom",
                        color: "primary.main"
                    }}
                />
            </Typography>
        </>
    )
}

export default DevInfo