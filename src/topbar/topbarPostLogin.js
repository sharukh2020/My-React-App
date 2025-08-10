import { useTheme } from '@mui/material/styles';
import Hamberger from './hamberger';
import Searchfield from './searchfield';
import TopbarMenu from './menu';
import Logo from './logo';
import Box from '@mui/material/Box';
import DrawerSidebar from './drawer';

function TopbarPostLogin() {
    const theme = useTheme();
    return (
        <Box
            component={"div"}
            sx={{
                width: "100%",
                minWidth:"320px",
                height: "60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 8px",
                boxSizing: "border-box",
                position: "fixed",
                left: 0,
                top: 0,
                zIndex: 1201,
                backgroundColor: theme.palette.primary.dark,
                boxShadow: theme.shadows[3],
            }}
        >
            <Box>
                <Hamberger/>
                <DrawerSidebar />
                <Logo />
            </Box>
            <Box
                sx={
                    {
                        width: "75%",
                        marginLeft: "8px",
                        [theme.breakpoints.up("md")]: {
                            display: "none"
                        },
                        [theme.breakpoints.up("sm")]: {
                            width: "40%"
                        },
                    }
                }
            >
                <Searchfield />
            </Box>
            <Box
                sx={
                    {
                        [theme.breakpoints.up("md")]: {
                            display: "none"
                        }
                    }
                }
            >
                <TopbarMenu />
            </Box>
            <Box
                sx={
                    {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        [theme.breakpoints.down("md")]: {
                            display: "none"
                        }
                    }
                }
            >
                <Searchfield />
                <TopbarMenu />
            </Box>

        </Box>
    )
}

export default TopbarPostLogin