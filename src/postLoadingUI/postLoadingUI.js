import { useTheme } from "@mui/material/styles"
import { useSelector } from "react-redux"
import Box from "@mui/material/Box"
import Topbar from "../topbar/topbar"
import Sidebar from "../sidebar/sidebar"
import Routing from "../routes/routes"

const PostLoadingUI = () => {
    const theme = useTheme();
    const loginState = useSelector((state) => state.loginState);
    const { login } = loginState

    const routingContainerPostPreLoginCommonStyles = () => {
        return (
            {
                width: '100%',
                position: "relative",
                top: "60px",
                left: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        )
    }

    const routingContainerPreLoginStyeles = () => {
        return (
            !login
            &&
            {
                height: 'calc(100vh - 50px)',
            }
        )
    }

    const routingContainerPostLoginStyeles = () => {
        return (
            login
            &&
            {
                height: 'auto',
            }
        )
    }

    const routingContainerPostLoginUpMdStyeles = () => {
        return (
            login
            &&
            {
                [theme.breakpoints.up("md")]: {
                    width: "calc(100% - 250px)",
                    left: "250px"
                },
            }
        )
    }

    return (
        <Box component={"div"}>
            <Topbar />
            <Sidebar />
            <Box
                component={"div"}
                sx={{
                    ...routingContainerPostPreLoginCommonStyles(),
                    ...routingContainerPreLoginStyeles(),
                    ...routingContainerPostLoginStyeles(),
                    ...routingContainerPostLoginUpMdStyeles(),
                }}>
                <Routing />
            </Box>
        </Box>)
}

export default PostLoadingUI