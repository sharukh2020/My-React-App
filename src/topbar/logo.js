import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography'

function Logo() {
    const theme = useTheme();
    const loginState = useSelector((state) => state.loginState);
    const { login } = loginState

    return (
        <Typography
            variant="h6"
            sx={{
                color: "white",
                fontWeight: "bold",
                [theme.breakpoints.down('md')]: {
                    display: `${login && "none"}`,
                }
            }}>
            TechGemz
        </Typography>
    )
}
export default Logo