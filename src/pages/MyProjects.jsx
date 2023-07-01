import {useState, useEffect} from "react"
import {Helmet} from "react-helmet-async";
import EllipsisText from "react-ellipsis-text"
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Chip,
    Slide,
    CardActionArea,
    CardMedia,
    CardActions,
    Button
} from "@mui/material"
import {grey} from "@mui/material/colors";
import {CodeRounded, SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material";
import Grid from "@mui/material/Unstable_Grid2";
import {useTheme} from "@mui/material/styles";

import {myProjects} from "../constants/myProjects";

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
                        <Slide
                            direction="down"
                            in={loading}
                            style={{
                                transitionDelay: loading ? "100ms" : "0ms",
                            }}
                        >
                            <Divider
                                textAlign="center"
                                sx={{
                                    "&::before, &::after": {
                                        borderColor: "primary.main",
                                    },
                                    mb: 3,
                                }}
                            >
                                <Chip
                                    icon={<SchoolRounded/>}
                                    color="primary"
                                    label={
                                        <Typography
                                            variant="body1"
                                            color="text.primary"
                                            sx={{textAlign: "center"}}
                                        >
                                            دوره های من
                                        </Typography>
                                    }
                                    sx={{p: 3}}
                                />
                            </Divider>
                        </Slide>

                        <Grid container sx={{mx: 3}}>
                            {myProjects.map((course, index) => (
                                <Grid
                                    key={index}
                                    xs={12}
                                    sm={6}
                                    md={6}
                                    lg={4}
                                    sx={{px: 2, mb: 2}}
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
                                        <Card
                                            sx={{
                                                maxWidth: 345,
                                                backgroundColor: grey[700],
                                                // borderRaduis: "rounded"
                                            }}
                                        >
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="250"
                                                    width="200"
                                                    image={course.image}
                                                    alt={course.title}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        variant="body1"
                                                        textAlign="left"
                                                        gutterBottom
                                                    >
                                                        {course.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        color="text.secondary"
                                                        textAlign="left"
                                                        gutterBottom
                                                        sx={{direction: "ltr"}}
                                                    >
                                                        <EllipsisText
                                                            text={course.info}
                                                            length={"100"}
                                                        />
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button
                                                    href={course.link}
                                                    size="small"
                                                    color="primary"
                                                    target="_blank"
                                                >
                                                    اطلاعات بیشتر
                                                </Button>
                                            </CardActions>
                                        </Card>
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

