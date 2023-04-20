import React, { useState, useEffect } from "react";
import {
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Image,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

import mobileBackground from "../../assets/destination/background-destination-mobile.jpg";
import desktopBackground from "../../assets/destination/background-destination-desktop.jpg";
import tabletBackground from "../../assets/destination/background-destination-tablet.jpg";

const Destination = () => {
  const [destinationsData, setDestinationsData] = useState([]);
  const [destination, setDestination] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setDestinationsData(data.destinations);
        console.log(data);
        setDestination(data.destinations[0]);
      });
  }, []);

  const backgroundImage = useBreakpointValue({
    base: mobileBackground,
    tablet: tabletBackground,
    desktop: desktopBackground,
  });
  const DestinationSelector = () => {
    return (
      <HStack>
        {destinationsData.map((item, idx) => (
        <Link 
            key={idx} 
            onClick={() => setDestination(item)}
            as={Text}
            variant="nav"
            color="#D0D6F9"
            className={`nav-option${item.name === destination.name ? ' selected' : ''}`}
        >
            {item.name}
          </Link>
        ))}
      </HStack>
    );
  };

  return (
    <Flex
      direction="column"
      backgroundImage={backgroundImage}
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
      <Flex className="hero-text" direction="column" gap="2em" align="center">
        <Heading size="h5" color="white">Pick Your Destination</Heading>
        <DestinationSelector />
        <Image src={destination.images?.png} />
        <Heading size="h2">{destination.name}</Heading>
        <Text>{destination.content}</Text>
        <Divider my="1rem" />
        <VStack>
          <Text variant="sub2">AVG. DISTANCE</Text>
          <Text variant="sub1">{destination.distance}</Text>
        </VStack>
        <VStack>
          <Text variant="sub2">Est. travel time</Text>
          <Text variant="sub1">{destination.travel}</Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Destination;
