import * as React from "react";
import Accordions from "../components/Accordions";
import { Center, Heading, Text } from "@chakra-ui/react";
import { oracaoNoturna } from "../data/oracaoNoturna";
function Oracao() {
  return (
    <>
      <Heading size={"sm"}>{oracaoNoturna.title1}</Heading>
      <Text mt={"20px"}>{oracaoNoturna.sinal_da_cruz}</Text>
      <Text mt={"5px"}>{oracaoNoturna.text1}</Text>
      <Heading mt={"20px"} size={"sm"}>
        {oracaoNoturna.title2}
      </Heading>
      <Text mt={"5px"}>{oracaoNoturna.text2}</Text>
      <Text>{oracaoNoturna.prece1}</Text>
      <Text>{oracaoNoturna.prece2}</Text>
      <Text>{oracaoNoturna.prece3}</Text>
      <Text>{oracaoNoturna.sinal_da_cruz}</Text>
      <Heading mt={"20px"} size={"sm"}>
        {oracaoNoturna.title3}
      </Heading>
      <Text mt={"5px"}>{oracaoNoturna.virgem_maria}</Text>
      <Heading mt={"20px"} size={"sm"}>
        {oracaoNoturna.title4}
      </Heading>
      <Text mt={"5px"}>{oracaoNoturna.sao_jose}</Text>
    </>
  );
}

export default Oracao;
