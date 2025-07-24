import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Topbar from './Topbar/Topbar';
import ClippedDrawer from './Sidebar.js/sidebar';

const Item = Paper

function App() {
  const theme = useTheme();
  console.log(theme)
  return (
    <Box component={"div"}>
      <Grid container>
        <Grid size={12}>
          <Item>
            <Topbar />
          </Item>
        </Grid>
        <Grid size={12} sx={
          {
            [theme.breakpoints.down('md')]: {
              display: "none"
            },
          }
        }>
          <Item>
            <ClippedDrawer />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;


