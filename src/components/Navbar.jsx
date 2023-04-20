import React, { useState } from "react";

import Logo from "../assets/shared/logo.svg";
import { Image, Flex, List, Icon, Link, Show, Text } from "@chakra-ui/react";

import { ReactComponent as HamburgerMenuIcon } from "../assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "../assets/shared/icon-close.svg";
import mobileBackground from "../assets/home/background-home-mobile.jpg";

const ResponsiveMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  return (
    <Flex>
      <List as={Show} above="lg">
        <Link href="#">Home</Link>
        <Link href="#">Destination</Link>
        <Link href="#">Crew</Link>
        <Link href="#">Technology</Link>
      </List>
      {isOpen ? (
        <Flex
          direction="column"
          minH="100vh"
          w="50%"
          position="absolute"
          top="0"
          right="0"
          className="image"
          bg="rgba(255,255,255,0.04)"
          backdropFilter="blur(12px)"
          color="white"
          p="1em"
          gap="5em"
        >
          <Icon
            as={CloseIcon}
            w="19px"
            h="19px"
            alignSelf="end"
            onClick={toggleOpen}
          />
          <List as={Flex} direction="column" gap="1em">
            <Link href="#">Home</Link>
            <Link href="#">Destination</Link>
            <Link href="#">Crew</Link>
            <Link href="#">Technology</Link>
          </List>
        </Flex>
      ) : (
        <Show below="lg">
          <Icon
            as={HamburgerMenuIcon}
            w="24px"
            h="21px"
            objectFit="contain"
            fill="white"
            onClick={toggleOpen}
          />
        </Show>
      )}
    </Flex>
  );
};

const Navbar = () => {
  return (
    <nav style={{ position: "absolute", top: "0", width: "100%" }}>
      <Flex p="1em" justify="space-between" align="center">
        <Image src={Logo} w="40px" h="40px" />
        <ResponsiveMenu />
      </Flex>
    </nav>
  );
};

export default Navbar;
