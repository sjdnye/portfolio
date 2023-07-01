import {useEffect, useRef, useCallback, useState} from "react"

import {Box, Typography} from "@mui/material";
import bg02 from "../assets/bg02.jpeg";
import {firefly, links} from "../constants/particles"

import Typed from "typed.js"
import Particles from "react-particles"
import {loadFull} from "tsparticles"
import TextTransition, {presets} from "react-text-transition";
import {Helmet} from "react-helmet-async";
import {useTheme} from "@mui/material/styles";

const Home = ({helmetTitle}) => {
    const theme = useTheme();
    const nameEl = useRef(null);
    const infoEl = useRef(null);
    const [index, setIndex] = useState(0)

    const strings = [
        "Back-end developer with Nodejs",
        "Front-end developer with Reactjs",
        "Android developer with kotlin",
    ]

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["Sajjad Babaei"],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false
        })
        // const typedInfo = new Typed(infoEl.current, {
        //     strings: strings,
        //     startDelay: 1500,
        //     typeSpeed: 80,
        //     backSpeed: 50,
        //     backDelay: 50,
        //     loop: true,
        //     showCursor: false
        // })

        const stringTransitions = setInterval(() => {
            setIndex((index) => index + 1)
        }, 3000)


        return () => {
            typedName.destroy();
            // typedInfo.destroy();
            clearInterval(stringTransitions)
        }

    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {

    }, [])

    return (
        <>
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <Box
                sx={{
                    backgroundImage: `url(${bg02})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "Column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={links}
                >

                </Particles>
                <Box component={"div"} sx={{display: "flex"}}>
                    <Typography variant="h3" sx={{textAlign: "center", color: "#F93C99"}}>
                         {"{{"}
                    </Typography>
                    <Typography ref={nameEl} variant="h3" sx={{textAlign: "center", color: "whitesmoke", mb: 1}}>
                    </Typography>
                    <Typography variant="h3" sx={{textAlign: "center", color: "#F93C99"}}>
                        {"}}"}
                    </Typography>

                </Box>

                <TextTransition
                    springConfig={presets.wobbly}
                >
                    <Typography
                        variant={"h4"}
                        color={"whitesmoke"}
                        sx={{textDecoration: "underline", textDecorationColor: "#F93C99"}}
                    >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
            </Box>
        </>
    )
}


export default Home;