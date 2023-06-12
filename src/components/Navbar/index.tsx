import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Center,
  Heading,
  Box,
  IconButton,
} from "@chakra-ui/react";
import Cards from "../Accordions";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box
        display={"flex"}
        flexDir={"row"}
        justifyContent={"left"}

        mb={"20px"}
        backgroundImage={'https://img.freepik.com/fotos-gratis/fundo-do-assoalho-de-madeira_53876-88628.jpg?w=1380&t=st=1686542629~exp=1686543229~hmac=ba14da2954714dd8b18651030b0ad0bb49cd33592e342367ebda3d4f9e5ef92b'}
      >
        <IconButton
          h={'60px'}
          w={'60px'}
          onClick={onOpen}
          colorScheme="blackAlpha"
          aria-label="Search database"
          icon={<GiHamburgerMenu />}
        />
        <Heading margin={'auto'} size={"lg"}>Seleta de Orações</Heading>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <Cards />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
