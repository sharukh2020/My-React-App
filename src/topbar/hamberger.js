import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { openDrawerSideBar } from '../appState/action';
import Box from "@mui/material/Box"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

function Hamberger() {
    const theme = useTheme();
    const dispatch = useDispatch()
    const toggleDrawer = (toggle) => () => {
        dispatch(toggle)
    };
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
                onClick={toggleDrawer(openDrawerSideBar())}
            />
        </Box>
    )
}
export default Hamberger