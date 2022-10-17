import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
  Box
} from '@chakra-ui/react';
import Sidebar from './layout/Sidebar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid templateColumns='auto 1fr'>
        <Sidebar />
        <Box/>
      </Grid>

    </ChakraProvider>
  );
}

export default App;
