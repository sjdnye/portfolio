import {AppBar, Toolbar, Button, Typography, useScrollTrigger} from "@mui/material"
import {cloneElement} from "react"

import logo from "../../assets/logo.svg"

const Header = () => {

    function ElevationScroll(props) {
        const {children} = props;
        // Note that you normally won't need to set the window ref as useScrollTrigger
        // will default to window.
        // This is only being set here because the demo is in an iframe.
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
        });

        return cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    return (
        <>
            <ElevationScroll>
                <AppBar posiotion="static">
                    <Toolbar disableGutters>
                        <img src={logo} alt="website logo" style={{
                            width: "3rem"
                        }}/>
                        <Typography variant="h4">my personal portfolio</Typography>
                        <Button variant="contained" color="primary">Click</Button>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    )

}
export default Header;