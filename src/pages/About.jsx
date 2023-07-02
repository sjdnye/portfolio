import {useState, useEffect} from "react"

import {Box, Card, CardContent} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import {grey} from "@mui/material/colors"
import {Skill, DevInfo} from "../components/pages"
import {devSkills} from "../constants/skills"
import {devWorkInfo} from "../constants/details"
import {
    CodeRounded,
    SelfImprovementRounded
} from "@mui/icons-material"
import logo from "../assets/logo.svg"
import {useTheme} from "@mui/material/styles";
import {Helmet} from "react-helmet-async";
import {CustomDivider, CustomAvatar} from "../components/common";
import AboutTooltip from "../components/pages/AboutTooltip";

const About = ({helmetTitle}) => {
    const {htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill, kotlinSkill} = devSkills;
    const theme = useTheme();

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
                <title>{helmetTitle}</title>
            </Helmet>
            <Box
                sx={{
                    height: "100vh",
                    backgroundColor: theme.palette.mode === "dark" ? grey[900] : "white",
                }}
            >
                <Card
                    sx={{
                        height: "100vh",
                        backgroundColor: theme.palette.mode === "dark" ? grey[900] : "white",
                        overflowY: "scroll"
                    }}
                >
                    <CardContent>
                        <Grid container sx={{mx: 3}}>
                            <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
                                <CustomDivider
                                    textAlign={"right"}
                                    borderColor={"primary.main"}
                                    chipColor={"primary"}
                                    chipIcon={<CodeRounded/>}
                                    chipTitle={"توسعه دهنده فول استک"}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: 1
                                    }}
                                >
                                    <Box
                                        sx={{
                                            mt: 3,
                                            display: {
                                                xs: "none",
                                                sm: "block",
                                                md: "block",
                                            },
                                        }}
                                    >
                                        {devWorkInfo.map((item, index) => (
                                            <AboutTooltip
                                                index={index}
                                                title={item.tooltipTitle}
                                                tooltipPlacement={"right"}
                                                chipIcon={item.icon}
                                                countUpEnd={item.total}
                                                chipBackgroundColor={item.color}
                                            />
                                        ))}
                                    </Box>
                                    <Box
                                        sx={{
                                            mt: 3,
                                            // display: {
                                            //     xs: "none",
                                            //     sm: "block",
                                            //     md: "block",
                                            // },
                                        }}
                                    >
                                        <DevInfo>
                                            نام و نام خانوادگی : سجی بلا
                                        </DevInfo>
                                        <DevInfo>سن : 23</DevInfo>
                                        <DevInfo>شهر : تهران</DevInfo>
                                        <DevInfo>
                                            sjdnye@gmail.com : آدرس ایمیل
                                        </DevInfo>
                                        <DevInfo>شماره موبایل : ۰۹۳۵۰۰۰۱۱۲۲</DevInfo>
                                    </Box>
                                </Box>

                                {/*<Grid container>*/}
                                {/*    <Grid*/}
                                {/*        xs={4}*/}
                                {/*        sm={4}*/}
                                {/*        md={3}*/}
                                {/*        lg={3}*/}
                                {/*        sx={{*/}
                                {/*            mt: 3,*/}
                                {/*            display: {*/}
                                {/*                xs: "none",*/}
                                {/*                sm: "block",*/}
                                {/*                md: "block",*/}
                                {/*            },*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*   */}
                                {/*    </Grid>*/}

                                {/*    <Grid xs={12} sm={8} md={9} lg={9}>*/}
                                {/*        <DevInfo>*/}
                                {/*            نام و نام خانوادگی : سجی بلا*/}
                                {/*        </DevInfo>*/}
                                {/*        <DevInfo>سن : 23</DevInfo>*/}
                                {/*        <DevInfo>شهر : تهران</DevInfo>*/}
                                {/*        <DevInfo>*/}
                                {/*            sjdnye@gmail.com : آدرس ایمیل*/}
                                {/*        </DevInfo>*/}
                                {/*        <DevInfo>شماره موبایل : ۰۹۳۵۰۰۰۱۱۲۲</DevInfo>*/}
                                {/*    </Grid>*/}
                                {/*</Grid>*/}
                            </Grid>
                            <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
                                <CustomAvatar
                                    avatar={logo}
                                    size={250}
                                    fallback={"SB"}
                                />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid sx={{width: 1, mt: 2}}>
                                <CustomDivider
                                    textAlign={"center"}
                                    borderColor={""}
                                    chipColor={"primary"}
                                    chipIcon={<SelfImprovementRounded/>}
                                    chipTitle={"توانایی های من"}
                                />
                                <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color}
                                       value={html}/>
                                <Skill name={cssSkill.name} icon={cssSkill.icon} color={cssSkill.color}
                                       value={css}/>
                                <Skill name={jsSkill.name} icon={jsSkill.icon} color={jsSkill.color}
                                       value={javascript}/>
                                <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color}
                                       value={reactJs}/>
                                <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color}
                                       value={nodeJs}/>
                                <Skill name={kotlinSkill.name} icon={kotlinSkill.icon} color={kotlinSkill.color}
                                       value={kotlin}/>
                                <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color}
                                       value={git}/>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>

    );
}


export default About;