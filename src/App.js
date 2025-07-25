import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Topbar from './Topbar/Topbar';
import CssBaseline from '@mui/material/CssBaseline';
import Body from './Body/body';
import Sidebar from './Sidebar/sidebar';

function App() {
  const theme = useTheme();
  console.log(theme)
  return (
    <Box component={"div"}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <Body />
    </Box>
  );
}

export default App;


