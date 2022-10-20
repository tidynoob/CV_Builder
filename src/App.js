import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
} from '@chakra-ui/react';
import Navbar from './layout/Navbar';
import Main from './layout/Main';
import './style.css';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Grid h='100vh' templateRows='auto 1fr'>
        <Navbar />
        <Main />
      </Grid>
    </ChakraProvider>
  );
}

export default App;
