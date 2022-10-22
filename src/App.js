import React from 'react';
import {
  ChakraProvider,
  theme,
  Grid,
} from '@chakra-ui/react';
import Navbar from './layout/Navbar';
import Main from './layout/Main';
import './style.css';
import { useReactToPrint } from 'react-to-print';

function App() {

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
});

const componentRef = React.useRef();

  return (
    <ChakraProvider theme={theme}>
      <Grid h='100vh' templateRows='auto 1fr'>
        <Navbar onPrint={handlePrint}/>
        <Main ref={componentRef}/>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
