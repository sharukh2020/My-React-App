import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';


function Hamberger({ toggleDrawer }) {
    const theme = useTheme();
    return (
        <Box
            component={"div"}
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                [theme.breakpoints.up('md')]: {
                    display: "none"
                },
            }}
        >
            <MenuSharpIcon
                sx={{
                    color: "white",
                    "&:hover": {
                        color: "grey"
                    }
                }}
                onClick={toggleDrawer(true)}
            />
        </Box>
    )
}

export default Hamberger