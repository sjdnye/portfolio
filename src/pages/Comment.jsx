import {useState, useEffect} from "react"
import {Helmet} from "react-helmet-async";
import {Box, Typography, Card, CardContent, Divider, Chip, Slide, Avatar} from "@mui/material"
import {grey} from "@mui/material/colors";
import Slider from "react-slick"
import {CodeRounded, SettingsEthernetRounded, ForumRounded} from "@mui/icons-material";
import {useTheme} from "@mui/material/styles";
import {userComments} from "../constants/details"


const Comment = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);
    const theme = useTheme();
    useEffect(() => {
        setLoading(true)

        return () => {
            setLoading(false)
        }
    }, [])

    const options = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        cssEase: "linear"
    }

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
                        overflowY: "scroll",
                        display: "flex",
                        flexDirection: "column"
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
                                        borderColor: "success.main",
                                    },
                                    mb: 3,
                                }}
                            >
                                <Chip
                                    icon={<ForumRounded/>}
                                    color="success"
                                    label={
                                        <Typography
                                            variant="body1"
                                            color="text.primary"
                                            sx={{textAlign: "center"}}
                                        >
                                            نظرات دانشجویان دوره های من
                                        </Typography>
                                    }
                                    sx={{p: 3}}
                                />
                            </Divider>
                        </Slide>
                        <Box
                            component="div"
                            sx={{
                                mt: 10,
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Slider {...options}>
                                {userComments.map((user, index) => (
                                    <Box
                                        key={index}
                                        component="div"
                                        sx={{justifyContent: "center"}}
                                    >
                                        <Avatar
                                            src={user.avatar}
                                            variant="rounded"
                                            sx={{
                                                height: 100,
                                                width: 100,
                                                margin: "0 auto",
                                            }}
                                        />
                                        <Typography
                                            variant="body1"
                                            textAlign="center"
                                            color="text.primary"
                                        >
                                            {user.fullname}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                            color="text.primary"
                                            sx={{mb: 2}}
                                        >
                                            {user.jobTitle}
                                        </Typography>
                                        <Card
                                            sx={{
                                                backgroundColor: "lightsalmon",
                                                width: 1 / 2,
                                                m: "0 auto",
                                                borderRadius: 5,
                                            }}
                                        >
                                            <CardContent>
                                                <Typography
                                                    variant="body2"
                                                    textAlign="center"
                                                    color={"text.primary"}
                                                >
                                                    {user.comment}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>

    )
}

export default Comment;
