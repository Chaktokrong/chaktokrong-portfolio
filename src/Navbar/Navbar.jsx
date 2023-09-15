import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
//Srcs
import NavbarRespon from "./NavbarRespon";

export default function Navbar() {
  const router = useRouter();
  const pathname = router.pathname;
  const splitePath = router.asPath.split("/");

  // Menu Scroll
  const [stickyNav, setStickyNav] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setStickyNav(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  }, []);

  // Resize width
  const [width, setWidth] = useState(0);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleChangeLanguage = (e) => {
    router.replace(`/${e}${router.asPath}`, `/${e}${router.asPath}`, {
      locale: e?.trim(),
    });
  };

  return (
    <div className="navbar-page">
      <Box
        className={
          splitePath[1] === "Product"
            ? "container-scroll"
            : stickyNav
            ? "container-scroll"
            : "container"
        }
      >
        {width > 1220 ? (
          <Flex className="menu-flex">
            <Box
              className="logo"
              onClick={() => {
                router.push(`/`);
              }}
            >
              {/* <Image src="/logo.svg" alt="CCI Logo" /> */}
            </Box>
            <Spacer />
            <Box className="menu-item">
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

            <Box className="menu-item">
              <Link href="/Product" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "Product" ? "1" : "0.6"}
                >
                  Product
                </Text>
              </Link>
            </Box>
            {/* <Box className="menu-item">
                
                <Menu>
                    <MenuButton >
                        <Text 
                          className="menu-title"
                          opacity={ splitePath[1] === "Product" || splitePath[1] === "Cleaning" ? "1" : "0.6"}   
                        >
                          {t("product")}
                        </Text>
                    </MenuButton>
                    <MenuList className="sub-menu">
                        <MenuItem className="sub-menu-item">
                            <Link href="/Product" passHref>
                              <Text 
                                  className="menu-title"
                                  opacity={ splitePath[1] === "Product" ? "1" : "0.6"}
                              >
                                {t('cosmitec')}
                              </Text>
                            </Link>
                        </MenuItem>
                        <MenuItem className="sub-menu-item">
                            <Link href="/Cleaning" passHref>
                              <Text 
                                className="menu-title"
                                opacity={ splitePath[1] === "Cleaning" ? "1" : "0.6"}
                              >{t('cleaning')}</Text>
                            </Link>
                        </MenuItem>
                                
                    </MenuList>
                </Menu>

              </Box> */}
            <Box className="menu-item">
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
            <Box className="menu-item">
              <Link href="/Blog" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "Blog" ? "1" : "0.6"}
                >
                  Blog
                </Text>
              </Link>
            </Box>

            <Box className="menu-item">
              <Link href="/About" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "About" ? "1" : "0.6"}
                >
                  About
                </Text>
              </Link>
            </Box>
            <Box className="menu-item">
              <Link href="/Contact" passHref>
                <Text
                  className="menu-title"
                  opacity={splitePath[1] === "Contact" ? "1" : "0.6"}
                >
                  Contact
                </Text>
              </Link>
            </Box>

            <Box className="menu-item">
              <Flex>
                <Box
                  whileHover="hover"
                  w="40%"
                  ml={"5px"}
                  mr={"5px"}
                  cursor={"pointer"}
                >
                  <Image
                    src="/cambodia-flag.png"
                    borderRadius="50%"
                    w="22px"
                    h="22px"
                    alt="Camflag"
                  />
                </Box>
                <Text className="kantumruyFont">ខ្មែរ</Text>
              </Flex>
            </Box>
          </Flex>
        ) : (
          <Flex className="menu-flex">
            <Box className="menu-item">
              <NavbarRespon />
            </Box>
            <Spacer />
            <Box
              className="logo-mobile"
              onClick={() => {
                router.push(`/`);
              }}
            >
              {/* <Image src="/logo.svg" alt="CCI Logo" width="100%" /> */}
            </Box>
            <Spacer />
            <Box className="menu-item">
              <Box className="flat-translate">
                <Flex>
                  <Box
                    whileHover="hover"
                    w="40%"
                    ml={"5px"}
                    mr={"5px"}
                    cursor={"pointer"}
                  >
                    <Image
                      src="/cambodia-flag.png"
                      borderRadius="50%"
                      w="22px"
                      h="22px"
                      alt="Camflag"
                    />
                  </Box>
                  <Text className="kantumruyFont">ខ្មែរ</Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
        )}
      </Box>
      <Spacer />
    </div>
  );
}
