import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import EllipsisText from "react-ellipsis-text";

const MyProjectCard = ({image, alt, title, info, link}) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                backgroundColor: grey[700],
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    width="200"
                    image={image}
                    alt={alt}
                />
                <CardContent>
                    <Typography
                        variant="body1"
                        textAlign="left"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign="left"
                        gutterBottom
                        sx={{direction: "ltr"}}
                    >
                        <EllipsisText
                            text={info}
                            length={"100"}
                        />
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    href={link}
                    size="small"
                    color="primary"
                    target="_blank"
                >
                    اطلاعات بیشتر
                </Button>
            </CardActions>
        </Card>
    );
}

export default MyProjectCard;