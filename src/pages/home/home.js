import MultiActionAreaCard from './card';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

function Home() {
    const theme = useTheme();
    return (
        <Box component={"div"} sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap:"wrap",
            paddingLeft:2,
            paddingTop:2,
            boxSizing:"border-box"
        }}>
            {
                Array.from({ length: 8 }).map((item, pos) => {
                    return (
                        <Box component={"div"} key={pos} sx={{
                            [theme.breakpoints.down("sm")]: {
                                width: "100%"
                            },
                             [theme.breakpoints.up("sm")]: {
                                width: "47%"
                            },
                            [theme.breakpoints.up("lg")]: {
                                width: "31%"
                            },
                            aspectRatio:"1 / 1",
                            marginRight:2,
                            marginBottom:2
                        }}>
                            <MultiActionAreaCard />
                        </Box>
                    );
                })
            }
        </Box>

    )
}
export default Home

