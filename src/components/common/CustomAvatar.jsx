import {Avatar, Box} from "@mui/material";

const CustomAvatar = ({avatar, size, fallback}) => {
    return (
        <>
            <Avatar
                src={avatar}
                variant="rounded"
                sx={{
                    height: size,
                    width: size,
                    margin: "0 auto",
                    display: {
                        xl: "block",
                        lg: "block",
                        md: "block",
                        sm: "none",
                        xs: "none",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: 150,
                        justifyContent: "center"
                    }}
                >
                    {fallback}
                </Box>
            </Avatar>
        </>
    );
};

export default CustomAvatar;