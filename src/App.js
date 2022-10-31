import React, { useEffect, useState } from "react";
import { Container, Paper, Box, useMediaQuery } from '@mui/material'
import Search from "./componets/Search/Search";
import getGitHubUser from './services/users.js'
import UserCard from "./containers/UserCard";
import { useSelector, useDispatch } from 'react-redux'
import { porDefault } from './redux/actions'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material'

const App = () => {
  const modo = useSelector(state => state.darkMode)
  const darkTheme = createTheme({
    palette: {
      mode: modo,
      secondary: {
        main: '#000'
      }
    }
  })
  const dispatch = useDispatch()
  const defecto = useSelector(state => state.default)
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState(inputUser)
  const gettingUser = async (user) => {
    const userResponse = await getGitHubUser(user)
    if (userResponse.login === 'octocat') {
      dispatch(porDefault(userResponse))
    }
    if (userResponse.message === 'Not Found') {
      setUserState(defecto)
    } else {
      setUserState(userResponse)
    }
  }

  useEffect(() => {
    gettingUser(inputUser)
  }, [inputUser])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Box
          sx={{
            height: '100vh',
            width: '100%',
            marginTop: '40px'
          }}
        >
          <Paper
            elevation={2}
            sx={{
              height: 'auto',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <Search setInputUser={setInputUser} />
            <UserCard userState={userState} />
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
