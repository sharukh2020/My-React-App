import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Hamberger from './hamberger';
import Searchfield from './searchfield';
import TopbarDrawer from './drawer';
import TopbarMenu from './menu';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from './logo';

const Item = Paper

function Topbar() {
    const theme = useTheme();
    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenDrawer(newOpen);
    };

    return (
        <Grid
            container
            size={12}
            spacing={{
                xs:2,
                md:0
            }}
            sx={{
                height: "60px",
                backgroundColor: theme.palette.primary.dark,
                boxShadow: theme.shadows[3],
                display: "flex",
                alignItems: "center"
            }}>
            <Grid
                size={{ xs: "grow", sm: 1, md: 3 }}
            >
                <Item
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        // border: "1px solid black"
                    }}>
                    <Hamberger toggleDrawer={toggleDrawer} />
                    <TopbarDrawer
                        toggle={openDrawer}
                        toggleDrawer={toggleDrawer} />
                    <Logo />
                </Item>
            </Grid>
            <Grid size={{
                xs: 8, sm: 10, md: 8
            }} sx={{

            }}>
                <Item sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    // border: "1px solid black",
                    [theme.breakpoints.up('sm')]: {
                        display: "flex",
                        justifyContent: "center",
                    },
                    [theme.breakpoints.up('md')]: {
                        display: "flex",
                        justifyContent: "flex-end",
                    },
                }}>
                    <Searchfield />
                </Item>
            </Grid>
            <Grid
                size={{ xs: "grow", sm: 1 }} >
                <Item
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        // border: "1px solid black"
                    }}>
                    <TopbarMenu />
                </Item>
            </Grid>
        </Grid>
    );
}

export default Topbar;


