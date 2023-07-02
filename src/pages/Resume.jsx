import {useState, useEffect} from "react"
import {Helmet} from "react-helmet-async";
import {Box, Card, CardContent} from "@mui/material"
import {
    Timeline,
} from "@mui/lab";
import {devEdu} from "../constants/details"
import {grey} from "@mui/material/colors";
import {CodeRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";
import CustomDivider from "../components/common/CustomDivider";
import ResumeTimelineElement from "../components/pages/ResumeTimelineElement";

const Resume = ({helmetTitle}) => {
    const theme = useTheme();
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
                        <CustomDivider
                            textAlign={"center"}
                            borderColor={"primary.main"}
                            chipColor={"primary"}
                            chipIcon={<CodeRounded/>}
                            chipTitle={"رزومه من"}
                        />
                        <Grid container sx={{mt: 4}}>
                            <Grid
                                xs={6}
                                sx={{height: "100vh"}}
                            >
                                <CustomDivider
                                    textAlign={"center"}
                                    borderColor={"warning.main"}
                                    chipColor={"warning"}
                                    chipIcon={<HomeRepairServiceRounded/>}
                                    chipTitle={" تجربیات"}
                                />

                                <Timeline position="right" sx={{direction: "ltr"}}>
                                    {devEdu.map((item, index) => (
                                        <ResumeTimelineElement
                                            index={index}
                                            length={devEdu.length}
                                            color={"warning"}
                                            icon={<HomeRepairServiceRounded color="warning"/>}
                                            year={item.year}
                                            cert={item.cert}
                                            major={item.major}
                                            place={item.place}
                                        />
                                    ))}
                                </Timeline>
                            </Grid>
                            <Grid
                                xs={6}
                                sx={{height: "100vh"}}
                            >

                                <CustomDivider
                                    textAlign={"center"}
                                    borderColor={"info.main"}
                                    chipColor={"info"}
                                    chipIcon={<SchoolRounded/>}
                                    chipTitle={"تحصیلات"}
                                />

                                <Timeline position="right" sx={{direction: "ltr"}}>
                                    {devEdu.map((item, index) => (
                                        <ResumeTimelineElement
                                            index={index}
                                            length={devEdu.length}
                                            color={"info"}
                                            icon={<SchoolRounded color="info"/>}
                                            year={item.year}
                                            cert={item.cert}
                                            major={item.major}
                                            place={item.place}
                                        />
                                    ))}
                                </Timeline>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}


export default Resume;