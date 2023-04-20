import React from "react";

import { Flex, Heading, Text, Button } from "@chakra-ui/react";

import mobileBackground from "../assets/home/background-home-mobile.jpg";

const Hero = () => {
  return (
    <Flex
      direction="column"
      backgroundImage={mobileBackground}
      backgroundRepeat="no-repeat"
      backgroundSize="100% 100%"
      w="100%"
      minH="100vh"
      p="1.5rem"
      pt="160px"
      align="center"
      textAlign="center"
      justify="space-around"
    >
      <Flex className="hero-text" direction="column">
        <Heading size="h5">So, you want to travel to</Heading>
        <Heading size="h1">Space</Heading>
        <Text>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text>
      </Flex>
      <Button
        borderRadius="50%"
        width={[150, 274]}
        height={[150, 274]}
        clipPath="circle(50%)"
      >
        <Heading size="h4" color="black">
          Explore
        </Heading>
      </Button>
    </Flex>
  );
};

export default Hero;
