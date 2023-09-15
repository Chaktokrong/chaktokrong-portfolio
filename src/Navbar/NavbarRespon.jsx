import * as React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";
//Srcs

export default function NavbarRespon({ lang }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const {
    isOpen: isOpenTogle,
    onToggle,
    onClose: onCloseTogle,
  } = useDisclosure();

  // Check Router
  const router = useRouter();
  const pathname = router.pathname;
  const splitePath = router.asPath.split("/");

  return (
    <>
      <Button ref={btnRef} colorScheme="none" onClick={onOpen}>
        <BiMenuAltLeft fontSize={30} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="navbar-responsive">
          <DrawerCloseButton color="#fff" />
          <DrawerHeader>{/* Menu */}</DrawerHeader>

          <Flex
            direction="column"
            justifyContent="center"
            className="main-menu"
          >
            <Box
              className="menu-item"
              onClick={() => {
                onCloseTogle();
                onClose();
              }}
            >
              <Link href="/" passHref>
                <Text
                  className="menu-title"
                  opacity={
                    splitePath[1] === "" || splitePath[1] === "Home"
                      ? "1"
                      : "0.6"
                  }
                >
                  Home
                </Text>
              </Link>
            </Box>

            {/* <Box className="menu-item" onClick={onToggle}>
              <Flex>
                <Text
                  className="menu-title"
                  opacity={
                    splitePath[1] === "Product" || splitePath[1] === "Cleaning"
                      ? "1"
                      : "0.6"
                  }
                >
                  {t("product")}
                </Text>
                <Spacer />
                {isOpenTogle ? (
                  <FiChevronUp className="icon-menu" />
                ) : (
                  <FiChevronDown className="icon-menu" />
                )}
              </Flex>
            </Box>

            {isOpenTogle ? (
              <Fade in={isOpenTogle}>
                <Box className="sub-menu-item" onClick={onClose}>
                  <Link href="/Product" passHref>
                    <Text
                      className="menu-title"
                      opacity={splitePath[1] === "Product" ? "1" : "0.6"}
                    >
                      {t("cosmitec")}
                    </Text>
                  </Link>
                </Box>

                <Box className="sub-menu-item" onClick={onClose}>
                  <Link href="/Cleaning" passHref>
                    <Text
                      className="menu-title"
                      opacity={splitePath[1] === "Cleaning" ? "1" : "0.6"}
                    >
                      {t("cleaning")}
                    </Text>
                  </Link>
                </Box>
              </Fade>
            ) : null} */}

            <Box
              className="menu-item"
              onClick={() => {
                onCloseTogle();
                onClose();
              }}
            >
              <Link href="/Product" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "Product" ? "1" : "0.6"}
                >
                  Product
                </Text>
              </Link>
            </Box>

            <Box
              className="menu-item"
              onClick={() => {
                onCloseTogle();
                onClose();
              }}
            >
              <Link href="/Portfolio" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "Portfolio" ? "1" : "0.6"}
                >
                  Portfolio
                </Text>
              </Link>
            </Box>

            {/* new page */}
            <Box
              className="menu-item"
              onClick={() => {
                onCloseTogle();
                onClose();
              }}
            >
              <Link href="/Blog" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "Blog" ? "1" : "0.6"}
                >
                  Blog
                </Text>
              </Link>
            </Box>

            <Box
              className="menu-item"
              onClick={() => {
                onCloseTogle();
                onClose();
              }}
            >
              <Link href="/About" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "About" ? "1" : "0.6"}
                >
                  About
                </Text>
              </Link>
            </Box>

            <Box
              className="menu-item"
              onClick={() => {
                onCloseTogle();
                onClose();
              }}
            >
              <Link href="/Contact" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "Contact" ? "1" : "0.6"}
                >
                  Contact
                </Text>
              </Link>
            </Box>

            <Box style={{ flexGrow: 1 }}></Box>

            <Box className="box-mark">
              {/* <Text className="text">&copy;រក្សាសិទ្ធដោយក្រុមហ៊ុន CCI</Text> */}
            </Box>
          </Flex>

          {/* <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}> Cancel </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}
