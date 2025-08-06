import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography'

function Logo() {
    const theme = useTheme();
    return (
        <Typography
            variant="h6"
            sx={{
                color: "white",
                marginLeft: 1,
                fontWeight: "bold",
                [theme.breakpoints.down('md')]: {
                    display: "none",
                },
            }}>
            TechGemz
        </Typography>
    )
}
export default Logo