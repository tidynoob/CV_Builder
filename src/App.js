import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
} from '@chakra-ui/react';
import Navbar from './layout/Navbar';
import Main from './layout/Main';

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
