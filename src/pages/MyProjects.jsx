import {useState, useEffect} from "react"
import {Helmet} from "react-helmet-async";
import {
    Box,
    Card,
    CardContent,
    Slide,
} from "@mui/material"
import {grey} from "@mui/material/colors";
import {
    SchoolRounded
} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";

import {myProjects} from "../constants/myProjects";
import {CustomDivider} from "../components/common";
import MyProjectCard from "../components/pages/MyProjectCard";

const MyProjects = ({helmetTitle}) => {
    const theme = useTheme();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])
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
                            chipIcon={<SchoolRounded/>}
                            chipTitle={"دوره های من"}
                        />
                        <Grid container sx={{mx: 3}}>
                            {myProjects.map((course, index) => (
                                <Grid
                                    key={index}
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    lg={4}
                                    sx={{px: 2, mb: 2, mt: 1}}
                                >
                                    <Slide
                                        direction="up"
                                        in={loading}
                                        style={{
                                            transitionDelay: loading
                                                ? `${index + 3}99ms`
                                                : "0ms",
                                        }}
                                    >
                                        <Box>
                                            <MyProjectCard
                                                image={course.image}
                                                alt={course.title}
                                                title={course.title}
                                                info={course.info}
                                                link={course.link}
                                            />
                                        </Box>
                                    </Slide>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default MyProjects;

