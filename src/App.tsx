import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Routes from "./routes/routes";
import theme from "./Styles/Global/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Routes />
    </ChakraProvider>
  );
}

export default App;
