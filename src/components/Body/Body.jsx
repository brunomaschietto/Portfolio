import {
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  ScaleFade,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import profilePic from "../../assets/profilePic.png";
import javascriptIcon from "../../assets/javascriptIcon.svg";
import html5Icon from "../../assets/html5Icon.svg";
import css3Icon from "../../assets/css3Icon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import tailwindcssIcon from "../../assets/tailwindcssIcon.svg";
import sqliteIcon from "../../assets/sqliteIcon.svg";
import pythonIcon from "../../assets/pythonIcon.svg";
import { InternDiv } from "./styles";
import pokedexProject from "../../assets/pokedexProject.jpg";

const Body = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"150px"}
    >
      <ScaleFade initialScale={0.1} in={true}>
        <InternDiv>
          <div>
            <Image src={profilePic} width={"300px"} height={"300px"} />
          </div>
          <Flex flexDirection={"column"} gap={"10px"}>
            <Heading color={"black"}>Hello! 👋</Heading>
            <Heading color={"black"}>Welcome to my page!</Heading>
            <Text color={"black"}>
              My name is <strong>Bruno Maschietto</strong>, i'm a Full-Stack
              Developer <br /> and a Mechanical Engineer. I live at the interior
              of São Paulo, Brasil.
              <br /> I love coding new thoughtful experiences. <br /> Sports
              enthusiast in my spare time.
            </Text>
          </Flex>
        </InternDiv>
      </ScaleFade>
      <Divider width={"1400px"} />
      <Flex flexDirection={"column"} alignItems={"center"} gap={"30px"}>
        <Heading color={"black"}>Tech Stack:</Heading>
        <Flex width={"500px"} justifyContent={"space-around"}>
          <Image src={javascriptIcon} height={"50px"} />
          <Image src={html5Icon} height={"50px"} />
          <Image src={css3Icon} height={"50px"} />
          <Image src={reactIcon} height={"50px"} />
          <Image src={tailwindcssIcon} height={"50px"} />
          <Image src={sqliteIcon} height={"50px"} />
          <Image src={pythonIcon} height={"50px"} />
        </Flex>
      </Flex>
      <Divider width={"1400px"} />
      <Heading color={"black"}>Projects:</Heading>
      <Flex flexWrap={"wrap"} alignItems={"center"} gap={'100px'} paddingLeft={'300px'}>
        <Card maxW={"sm"} bgColor={"white"} boxShadow={"10px 5px 5px black"}>
          <CardBody>
            <Image
              src={pokedexProject}
              alt="Image from Pokedex Project"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Pokédex Project</Heading>
              <Text>
                The site was developed so that the user has the ability to
                capture Pokémon and store them in their own Pokedex. There is
                also the option to observe the details of each Pokémon. The
                technologies used were, React.js, Styled-Components, Chakra UI.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={"sm"} bgColor={"white"} boxShadow={"10px 5px 5px black"}>
          <CardBody>
            <Image
              src={pokedexProject}
              alt="Image from Pokedex Project"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Pokédex Project</Heading>
              <Text>
                The site was developed so that the user has the ability to
                capture Pokémon and store them in their own Pokedex. There is
                also the option to observe the details of each Pokémon. The
                technologies used were, React.js, Styled-Components, Chakra UI.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={"sm"} bgColor={"white"} boxShadow={"10px 5px 5px black"}>
          <CardBody>
            <Image
              src={pokedexProject}
              alt="Image from Pokedex Project"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Pokédex Project</Heading>
              <Text>
                The site was developed so that the user has the ability to
                capture Pokémon and store them in their own Pokedex. There is
                also the option to observe the details of each Pokémon. The
                technologies used were, React.js, Styled-Components, Chakra UI.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={"sm"} bgColor={"white"} boxShadow={"10px 5px 5px black"}>
          <CardBody>
            <Image
              src={pokedexProject}
              alt="Image from Pokedex Project"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Pokédex Project</Heading>
              <Text>
                The site was developed so that the user has the ability to
                capture Pokémon and store them in their own Pokedex. There is
                also the option to observe the details of each Pokémon. The
                technologies used were, React.js, Styled-Components, Chakra UI.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={"sm"} bgColor={"white"} boxShadow={"10px 5px 5px black"}>
          <CardBody>
            <Image
              src={pokedexProject}
              alt="Image from Pokedex Project"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Pokédex Project</Heading>
              <Text>
                The site was developed so that the user has the ability to
                capture Pokémon and store them in their own Pokedex. There is
                also the option to observe the details of each Pokémon. The
                technologies used were, React.js, Styled-Components, Chakra UI.
              </Text>
            </Stack>
          </CardBody>
        </Card>
        <Card maxW={"sm"} bgColor={"white"} boxShadow={"10px 5px 5px black"}>
          <CardBody>
            <Image
              src={pokedexProject}
              alt="Image from Pokedex Project"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Pokédex Project</Heading>
              <Text>
                The site was developed so that the user has the ability to
                capture Pokémon and store them in their own Pokedex. There is
                also the option to observe the details of each Pokémon. The
                technologies used were, React.js, Styled-Components, Chakra UI.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Body;
