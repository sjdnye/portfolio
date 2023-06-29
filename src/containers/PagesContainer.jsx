import Grid from "@mui/material/Unstable_Grid2";
import {grey} from "@mui/material/colors"

const PagesContainer = ({ children }) => {
    return (
        <Grid
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
            sx={{ backgroundColor: grey[900] }}
        >
            {children}
        </Grid>
    );
};

export default PagesContainer;
