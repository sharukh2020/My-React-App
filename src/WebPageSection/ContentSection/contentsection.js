import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import MultiActionAreaCard from './card';

function ContentSection() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                position: "relative",
                left: "250px",
                top: "10vh",
                marginTop: 2,
                [theme.breakpoints.down("md")]: {
                    left: 0,
                },
                [theme.breakpoints.up("md")]: {
                    width: 'calc(100vw - 266px)'
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 2,
                paddingBottom: 2,
            }}>

            <Grid
                container
                columns={24}
                spacing={2}
                sx={{
                    paddingLeft: 2,
                    paddingRight: 2,
                    paddingBottom: 2
                }}
            >

                {
                    Array.from({ length: 8 }).map((_, i) => {
                        return (
                            <Grid
                                key={i}
                                size={{
                                    xs: 24,
                                    sm: 12,
                                    lg: 6,
                                    xl: 4
                                }}
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}
                            >
                                <MultiActionAreaCard />
                            </Grid>
                        );
                    })

                }
            </Grid>
        </Box>
    )
}
export default ContentSection

