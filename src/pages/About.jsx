import {useState, useEffect} from "react"

import {Box, Typography, Card, CardContent, Divider, Chip, Avatar} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {grey} from "@mui/material/colors"
import Skill from "./components/Skill"
import {devSkills} from "../constants/skills"

import {
    CodeRounded,
    ArrowLeftRounded,
    KeyboardArrowLeftRounded,
    SelfImprovementRounded
} from "@mui/icons-material"
import logo from "../assets/logo.svg"
import DevInfo from "./components/DevInfo";

import {Helmet} from "react-helmet-async";

const About = () => {
    const {htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill, kotlinSkill} = devSkills;

    const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);
    const [kotlin, setKotlin] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setJavascript((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 85)
            });

            setHtml((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 80)
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 75)
            });

            setNodeJs((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 90)
            });

            setReactJs((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 90)
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 60)
            });

            setKotlin((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 92)
            });
        }, 150);

        return () => {
            clearInterval(timer);
        }
    }, []);


    return (
        <>
            <Helmet>
                <title>درباره من</title>
            </Helmet>
            <Box
                sx={{
                    height: "100vh",
                    backgroundColor: grey[900],
                }}
            >
                <Card
                    sx={{
                        height: "100vh",
                        backgroundColor: grey[900],
                        overflowY: "scroll"
                    }}
                >
                    <CardContent>
                        <Grid container
                              sx={{mx: 3}}
                        >
                            <Grid
                                xs={12}
                                sm={12}
                                md={8}
                                lg={8}
                                xl={8}
                            >
                                <Divider
                                    textAlign="right"
                                    sx={{
                                        "&::before, &::after": {
                                            borderColor: "primary.main"
                                        }
                                    }}
                                >
                                    <Chip
                                        color={"primary"}
                                        label={
                                            <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                                                Trying to be good programmer
                                            </Typography>
                                        }
                                        icon={<CodeRounded/>}
                                        sx={{p: 3}}
                                    />
                                </Divider>
                                <DevInfo>
                                    نام و نام خانوادگی : سجی بلا
                                </DevInfo>
                                <DevInfo>
                                    سن : 23
                                </DevInfo>
                                <DevInfo>
                                    شهر : تهران
                                </DevInfo>
                                <DevInfo>
                                    sjdnye@gmail.com : آدرس ایمیل
                                </DevInfo>

                            </Grid>
                            <Grid
                                xs={0}
                                sm={0}
                                md={4}
                                lg={4}
                                xl={4}
                            >
                                <Avatar
                                    src={logo}
                                    variant={"rounded"}
                                    sx={{
                                        height: 200,
                                        width: 200,
                                        display: {
                                            xl: "block",
                                            lg: "block",
                                            md: "block",
                                            sm: "none",
                                            xs: "none"
                                        },
                                        margin: "0 auto"
                                    }}
                                >
                                    SB
                                </Avatar>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid sx={{width: 1, mt: 2}}>
                                <Divider
                                    textAlign="center"
                                    sx={{
                                        // "&::before, &::after": {
                                        //     borderColor: "secondary.main"
                                        // }
                                    }}
                                >
                                    < Chip
                                        color={"primary"}
                                        label={
                                            <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                                                My skills
                                            </Typography>
                                        }
                                        icon={<SelfImprovementRounded color="black" sx={{tint: "black"}}/>}
                                        sx={{p: 3}}
                                    />
                                </Divider>
                                <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color}
                                       value={html}/>
                                <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color} value={css}/>
                                <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color}
                                       value={javascript}/>
                                <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color}
                                       value={reactJs}/>
                                <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color}
                                       value={nodeJs}/>
                                <Skill name={kotlinSkill.name} icon={kotlinSkill.icon} color={kotlinSkill.color}
                                       value={kotlin}/>
                                <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>

    );
}


export default About;