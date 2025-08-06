import { useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Topbar from './WebPageSection/Topbar/Topbar';
import Sidebar from './WebPageSection/Sidebar/sidebar';
import ContentSection from './WebPageSection/ContentSection/contentsection';
import SignUp from './WebPageSection/Authentication/SignUp/signup';
import SignIn from './WebPageSection/Authentication/SignIn/signin';

function App() {
  const theme = useTheme();
  // console.log(theme)
  return (
    <Box component={"div"}>
      <CssBaseline />
      <Topbar />
      {/* <Sidebar /> */}
      {/* <ContentSection /> */}
      <SignUp />
      {/* <SignIn /> */}
    </Box>
  );
}

export default App;


