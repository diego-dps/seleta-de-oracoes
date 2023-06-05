import * as React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
} from "@chakra-ui/react";
import { sections } from "../../data/sections";
function Cards() {
  return (
    <Accordion>
      <>
        {sections.map((item) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {item.list?.map((itemList) => (
                <>
                  <Box fontSize={"sm"} pl={"20px"} mt={"10px"}>
                    {itemList.name}
                  </Box>
                  <Divider mt={"10px"} />
                </>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </>
    </Accordion>
  );
}

export default Cards;
