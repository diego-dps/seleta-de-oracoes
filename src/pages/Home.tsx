import * as React from "react";
import Accordions from "../components/Accordions";
import { Center, Heading } from "@chakra-ui/react";

function Home() {
  return (
    <>
      <Center mt={"20px"} mb={"20px"}>
        <Heading size={"lg"}>Seleta de Orações</Heading>
      </Center>
      <Accordions />
    </>
  );
}

export default Home;
