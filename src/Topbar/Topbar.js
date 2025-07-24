import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Hamberger from './hamberger';
import Searchfield from './searchfield';
import TopbarDrawer from './drawer';
import TopbarMenu from './menu';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
            spacing={2}
            sx={{
                height: "10vh",
                backgroundColor: theme.palette.primary.dark,
                boxShadow: theme.shadows[3],
                display: "flex",
                alignItems: "center"
            }}>
            <Grid size="grow">
                <Item
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none"
                    }}>
                    <Hamberger toggleDrawer={toggleDrawer} />
                    <TopbarDrawer toggle={openDrawer} toggleDrawer={toggleDrawer} />
                </Item>
            </Grid>
            <Grid size={8}>
                <Item><Searchfield /></Item>
            </Grid>
            <Grid size="grow">
                <Item
                    sx={{
                        backgroundColor: "transparent",
                        boxShadow: "none"
                    }}>
                    <TopbarMenu />
                </Item>
            </Grid>
        </Grid>
    );
}

export default Topbar;


