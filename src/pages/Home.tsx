import * as React from "react";
import Accordions from "../components/Accordions";
import { Box, Center, Heading, Image } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Paths from "../routes/routes";

function Home() {
  return (
    <Box>
      <Center>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/7/77/Almeida_J%C3%BAnior_-_Cristo_crucificado%2C_1889.JPG" />
      </Center>
    </Box>
  );
}

export default Home;
