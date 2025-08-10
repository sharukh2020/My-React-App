import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Logo from './logo';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { preLoginRightPortion } from "./preLoginRightPortion";

function TopbarPreLogin() {
    const theme = useTheme();
    const location = useLocation();
    const [preLoginRightPortionData, setPreLoginRightPortionData] = React.useState({
        question: "",
        redirectToPageName: "",
        redirectPageRoute: ""
    });

    React.useEffect(() => {
        preLoginRightPortion(location, setPreLoginRightPortionData)
    }, [location.pathname]);

    return (
        <Box
            component={"div"}
            sx={
                {
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
                }
            }
        >
            <Logo />
            <Box
                sx={
                    {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }
                }
            >
                <Typography
                    sx={
                        {
                            [theme.breakpoints.down('md')]: {
                                display: "none"
                            },
                            marginRight: 2,
                            color: "white"
                        }
                    }
                >
                    {preLoginRightPortionData.question}
                </Typography>
                <Link
                    href={preLoginRightPortionData.redirectPageRoute}
                    underline="hover"
                    sx={
                        {
                            color: "white",
                        }
                    }
                >
                    {preLoginRightPortionData.redirectToPageName}
                </Link>
            </Box>
        </Box>
    )
}

export default TopbarPreLogin