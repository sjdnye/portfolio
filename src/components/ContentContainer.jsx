import Grid from "@mui/material/Unstable_Grid2";
import {Typography} from "@mui/material";
import {grey} from "@mui/material/colors"

const ContentContainer = ({children}) => {
    return (
        <Grid
            xs={12}
            sm={12}
            md={10}
            lg={10}
            xl={10}
            sx={{backgroundColor: grey[900]}}
        >
            {/*<Typography*/}
            {/*    variant="h5"*/}
            {/*    sx={{textAlign: "center"}}*/}
            {/*>*/}
            {/*    portfolio*/}
            {/*</Typography>*/}
            {children}
        </Grid>
    )
}

export default ContentContainer;