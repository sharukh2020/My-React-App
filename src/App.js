import { BrowserRouter } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginStateHandler } from './loginStateHandler/loginStateHandler';
import LoadingUI from './loadingUI/loadingUI';
import PostLoadingUI from './postLoadingUI/postLoadingUI';
import './App.css';
import Box from '@mui/material/Box';

function App() {
  const theme = useTheme();
  const dispatch = useDispatch()
  const loginState = useSelector((state) => state.loginState);
  const { appLoading, logoutProgress, signInProgress } = loginState
  console.log(theme)
  console.log("LOGIN-STATE:- ", loginState)

  useEffect(() => {
    const unsubscribeAuth = LoginStateHandler(dispatch);

    return () => {
      unsubscribeAuth(); //cleanup Firebase listener
    };
  }, []);

  const mainContainerLoadingAndProgressStyles = () => {
    return (
      (appLoading || logoutProgress || signInProgress)
      &&
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    )
  }

  return (
    <BrowserRouter>
      <Box
        component={"div"}
        sx={{
          ...mainContainerLoadingAndProgressStyles(),
          minWidth: "320px",
          height: "100vh",
        }}
      >
        {
          (appLoading || signInProgress || logoutProgress)
            ?
            LoadingUI()
            :
            PostLoadingUI()
        }
      </Box>
    </BrowserRouter>
  );
}

export default App;
