import {useState, useEffect} from "react"
import {useFormik} from "formik"
import {useTheme} from "@mui/material/styles"
import {
    Typography,
    Card,
    CardContent,
    Slide,
    TextField,
    InputAdornment,
    CardActions,
    Button,
} from "@mui/material"
import {grey} from "@mui/material/colors"
import Grid from "@mui/material/Unstable_Grid2"
import {
    Face6Rounded,
    SubjectRounded,
    EmailRounded,
    AccountCircleRounded,
} from "@mui/icons-material"
import {Helmet} from "react-helmet-async"
import ReCAPTCHA from "react-google-recaptcha"


import worldMap from "../assets/map.svg"
import {contactValidationSchema} from "../validations/contactValidation";
import {CustomDivider} from "../components/common";
import {ContactForm} from "../components/pages";

const Contact = ({helmetTitle}) => {
    const theme = useTheme()
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
                        borderColor={"warning.main"}
                        chipColor={"warning"}
                        chipIcon={<AccountCircleRounded/>}
                        chipTitle={"ارتباط با من"}
                    />
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading ? "200ms" : "0ms",
                        }}
                    >
                        <Grid container sx={{mt: 5}}>
                            <Slide
                                direction="up"
                                in={loading}
                                style={{
                                    transitionDelay: loading ? "200ms" : "0ms",
                                }}
                            >
                                <Grid xs={12} sx={12} md={8}>
                                    <Card
                                        sx={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <ContactForm/>
                                    </Card>
                                </Grid>
                            </Slide>
                            <Slide
                                direction="up"
                                in={loading}
                                style={{
                                    transitionDelay: loading ? "200ms" : "0ms",
                                }}
                            >
                                <Grid
                                    xs={0}
                                    sm={0}
                                    md={4}
                                    sx={{
                                        textAlign: "center",
                                        backgroundImage: `url(${worldMap})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                        sx={{
                                            fontFamily: "vazir",
                                            mt: 4,
                                            display: {
                                                xs: "none",
                                                sm: "none",
                                                md: "block",
                                            },
                                        }}
                                    >
                                        بیا در مورد همه چیز باهم صحبت کنیم
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.primary"
                                        sx={{
                                            mt: 2,
                                            display: {
                                                xs: "none",
                                                sm: "none",
                                                md: "block",
                                            },
                                        }}
                                    >
                                        👋{" "}
                                        <a
                                            href="mailto:younes.gh@chmail.ir"
                                            alt="email"
                                            style={{
                                                color: "tomato",
                                            }}
                                        >
                                            ایمیل
                                        </a>{" "}
                                        بزن به من
                                    </Typography>
                                </Grid>
                            </Slide>
                        </Grid>
                    </Slide>
                </CardContent>
            </Card>
        </>
    )
}


export default Contact;