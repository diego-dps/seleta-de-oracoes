import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import  Routes from './routes/routes';

function App() {
  return (
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
  );
}

export default App;
