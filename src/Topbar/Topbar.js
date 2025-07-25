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
            columns={24}
            sx={{
                height: "10vh",
                backgroundColor: theme.palette.primary.dark,
                boxShadow: theme.shadows[3],
                display: "flex",
                alignItems: "center",
            }}
        >
            <Grid
                size={{ xs: "grow", md: 3 }}
            >
                <Hamberger
                    toggleDrawer={toggleDrawer}
                />
                <TopbarDrawer
                    toggle={openDrawer}
                    toggleDrawer={toggleDrawer}
                />
                <Logo />
            </Grid>
            <Grid
                size={{ xs: 0, md: 12 }}
            >
            </Grid>
            <Grid
                size={{
                    xs: 18, md: 8
                }}
                sx={{
                    [theme.breakpoints.up('md')]: {
                        display: 'flex',
                        justifyContent: "flex-end",
                    },
                }}
            >
                <Searchfield />
            </Grid>
            <Grid
                size={{ xs: "grow", md: 1 }}
            >
                <TopbarMenu />

            </Grid>
        </Grid>
    );
}

export default Topbar;


