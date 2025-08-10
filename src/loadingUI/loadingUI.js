import { useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"

const LoadingUI = () => {
    const theme = useTheme();
    const loginState = useSelector((state) => state.loginState);
    const { appLoading, logoutProgress, signInProgress } = loginState

    return (
        <Box
            component={"div"}
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <Typography sx={{
                color: theme.palette.primary.main,
                fontSize: "30px",
                fontWeight: "bold"
            }}>
                {appLoading && "Loading..."}
                {signInProgress && "Signing In..."}
                {logoutProgress && "Signing Out..."}
            </Typography>
            <CircularProgress size="30px" />
        </Box>
    )
}

export default LoadingUI