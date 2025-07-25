import Grid from '@mui/material/Grid'
import Sidebar from '../Sidebar/sidebar'
import Content from '../Content/content'
import { useTheme } from '@mui/material/styles'

function Body() {
    const theme = useTheme();
    return (
        <Grid
            container
            size={12}
            columns={24}
        >
            <Sidebar />
            <Content />
        </Grid>
    )
}

export default Body