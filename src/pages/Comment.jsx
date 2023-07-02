import {Helmet} from "react-helmet-async";
import {Box, Card, CardContent} from "@mui/material"
import {grey} from "@mui/material/colors";
import Slider from "react-slick"
import {ForumRounded} from "@mui/icons-material";
import {userComments} from "../constants/details"
import CustomDivider from "../components/common/CustomDivider";
import UserCommentBox from "../components/pages/UserCommentBox";
import {useTheme} from "@mui/material/styles";


const Comment = ({helmetTitle}) => {
    const theme = useTheme();
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
                        <CustomDivider
                            textAlign={"center"}
                            borderColor={"success.main"}
                            chipColor={"success"}
                            chipIcon={<ForumRounded/>}
                            chipTitle={" نظرات دانشجویان دوره های من"}
                        />

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
                                        <UserCommentBox
                                            avatar={user.avatar}
                                            userFullname={user.fullname}
                                            userJobTitle={user.jobTitle}
                                            userComment={user.comment}
                                        />
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
