import Grid from "@mui/material/Unstable_Grid2";
import {Typography, Avatar, Divider, Box, Hidden} from "@mui/material";
import {grey} from "@mui/material/colors"

const Sidebar = () => {
    return (
        <Grid xs={0} sm={0} md={2} lg={2} xl={2}
              sx={{backgroundColor: grey[900]}}>
           <Box
               sx={{
               justifyContent:"center",
               textAlign:"center",
               mt:2
           }}>
               <Hidden mdDown>
                   <Avatar
                       src={require("../../assets/logo.svg")}
                       variant="rounded"
                       sx={{height: 200, width: 200, margin: "0 auto"}}
                   />
               </Hidden>
               <Typography variant="h6" color="whitesmoke">Saji</Typography>
               <Typography variant="caption" color="whitesmoke">Programmer</Typography>
               <Divider variant="middle" color={grey[600]} sx={{mt:2}}/>
           </Box>
        </Grid>
    )
}

export default Sidebar;