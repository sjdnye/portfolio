import {Avatar, Card, CardContent, Typography} from "@mui/material";


const UserCommentBox = ({avatar, userFullname, userJobTitle, userComment}) => {
    return (
        <>
            <Avatar
                src={avatar}
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
                {userFullname}
            </Typography>
            <Typography
                variant="body2"
                textAlign="center"
                color="text.primary"
                sx={{mb: 2}}
            >
                {userJobTitle}
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
                        {userComment}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default UserCommentBox;