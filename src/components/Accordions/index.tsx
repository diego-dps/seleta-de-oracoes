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
import { Link } from "react-router-dom";
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
                <Link to={itemList.link}>
                  <Box
                    _hover={{
                      background: "#f1f1f1",
                      color: "grey",
                    }}
                  >
                    <Box fontSize={"sm"} pl={"20px"} mt={"10px"}>
                      <>
                        {itemList.name}
                      </>
                    </Box>
                    <Divider mt={"10px"} />
                  </Box>
                  </Link>
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
