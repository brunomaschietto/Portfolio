import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
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
import marvelWebsite from "../../assets/marvelWebsite.jpg";
import sateliteWebsite from "../../assets/sateliteWebsite.jpg";
import labecommerceProject from "../../assets/labecommerceProject.jpg";
import cookenuProject from "../../assets/cookenuProject.jpg";
import labookProject from "../../assets/labookProject.jpg";

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
          <Flex flexDirection={"column"} gap={"10px"} id={"about"}>
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
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        gap={"30px"}
        id={"techStack"}
      >
        <Heading color={"black"}>Tech Stack</Heading>
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
      <Flex
        flexWrap={"wrap"}
        alignItems={"center"}
        gap={"100px"}
        paddingLeft={"300px"}
        id={"projects"}
      >
        <Card
          maxW={"sm"}
          bgColor={"white"}
          boxShadow={"10px 5px 5px black"}
          height={"lg"}
        >
          <CardBody>
            <Image
              src={pokedexProject}
              alt="Image from Pokedex Project"
              borderRadius="lg"
              boxShadow={"5px 5px 5px 5px grey"}
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
          <CardFooter>
            <Flex justifyContent={"space-around"} width={"300px"}>
              <Link
                href="https://projeto-pokedex-bruno-maschietto.surge.sh/"
                target="_blank"
                color={"blue"}
              >
                Website
              </Link>
              <Link
                href="https://github.com/brunomaschietto/projeto-react-apis"
                target="_blank"
                color={"blue"}
              >
                Code Review
              </Link>
            </Flex>
          </CardFooter>
        </Card>
        <Card
          maxW={"sm"}
          bgColor={"white"}
          boxShadow={"10px 5px 5px black"}
          height={"lg"}
        >
          <CardBody>
            <Image
              src={marvelWebsite}
              alt="Image from Marvel Website Project"
              borderRadius="lg"
              boxShadow={"5px 5px 5px 5px grey"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Marvel Website Project</Heading>
              <Text>
                The site was developed with the intention of bringing to the
                user the option to connect with his favorite character, comic or
                creator and know more about them. The technologies used were,
                Next.js, Styled-Components.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex justifyContent={"space-around"} width={"300px"}>
              <Link
                href="https://frontend-test-two-bruno-maschietto.vercel.app/"
                target="_blank"
                color={"blue"}
              >
                Website
              </Link>
              <Link
                href="https://github.com/brunomaschietto/frontend-test-two"
                target="_blank"
                color={"blue"}
              >
                Code Review
              </Link>
            </Flex>
          </CardFooter>
        </Card>
        <Card
          maxW={"sm"}
          bgColor={"white"}
          boxShadow={"10px 5px 5px black"}
          height={"lg"}
        >
          <CardBody>
            <Image
              src={sateliteWebsite}
              alt="Image from Satellite's website Project"
              borderRadius="lg"
              boxShadow={"5px 5px 5px 5px grey"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Satellite's E-commerce</Heading>
              <Text>
                This website was a simulation of and E-commerce, where the user
                was able to buy the oldest satellites in history. They were very
                rare, and eventually very expensive. he technologies used were,
                React.js, Styled-Components, Chakra-ui.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex justifyContent={"space-around"} width={"300px"}>
              <Link
                href="https://satellite-website.surge.sh/"
                target="_blank"
                color={"blue"}
              >
                Website
              </Link>
              <Link
                href="https://github.com/brunomaschietto/projeto-frontendreact"
                target="_blank"
                color={"blue"}
              >
                Code Review
              </Link>
            </Flex>
          </CardFooter>
        </Card>
        <Card
          maxW={"sm"}
          bgColor={"white"}
          boxShadow={"10px 5px 5px black"}
          height={"lg"}
        >
          <CardBody>
            <Image
              src={labecommerceProject}
              alt="Image from Labecommerce Project"
              borderRadius="lg"
              boxShadow={"5px 5px 5px 5px grey"}
              height={"180px"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Labecommerce Project</Heading>
              <Text>
                Project that simulates an E-Commerce developed with Typescript
                aimed at the Back-End. API that provides data on users, products
                and purchases, and can also create, edit and delete new
                resources. Tecnologies used were, TypeScript, Node.js.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex justifyContent={"space-around"} width={"300px"}>
              <Link
                href="https://documenter.getpostman.com/view/24460718/2s8ZDeTJR6"
                target="_blank"
                color={"blue"}
              >
                Website
              </Link>
              <Link
                href="https://github.com/brunomaschietto/labecommerce-backend"
                target="_blank"
                color={"blue"}
              >
                Code Review
              </Link>
            </Flex>
          </CardFooter>
        </Card>
        <Card
          maxW={"sm"}
          bgColor={"white"}
          boxShadow={"10px 5px 5px black"}
          height={"lg"}
        >
          <CardBody>
            <Image
              src={cookenuProject}
              alt="Image from Cookenu Project"
              borderRadius="lg"
              boxShadow={"5px 5px 5px 5px grey"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Cookenu Website Project</Heading>
              <Text>
                The site was developed for the user to create his account and
                when he/she is logged in, he/she checks his/her best saved
                recipes. Use the test login(Login: fulana@gmail.com/Password:
                fulana123). Tecnologies used were, React.js, Styled-components.
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex justifyContent={"space-around"} width={"300px"}>
              <Link
                href="https://cookenu-website.surge.sh/"
                target="_blank"
                color={"blue"}
              >
                Website
              </Link>
              <Link
                href="https://github.com/brunomaschietto/revisao-cookenu"
                target="_blank"
                color={"blue"}
              >
                Code Review
              </Link>
            </Flex>
          </CardFooter>
        </Card>
        <Card
          maxW={"sm"}
          bgColor={"white"}
          boxShadow={"10px 5px 5px black"}
          height={"lg"}
        >
          <CardBody>
            <Image
              src={labookProject}
              alt="Image from Labook Project"
              borderRadius="lg"
              boxShadow={"5px 5px 5px 5px grey"}
              height={"180px"}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Labook Project</Heading>
              <Text>
                This API was developed as a simulation of a Social Network,
                where you are able to create an User, Login with it, create your
                own posts, liking and disliking some other people posts.
                Tecnologies used were, TypeScript, Node.js
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Flex justifyContent={'space-around'} width={'300px'}>
              <Link
                href="https://documenter.getpostman.com/view/24460718/2s93CPrsHg"
                target="_blank"
                color={"blue"}
              >
                Website
              </Link>
              <Link
                href="https://github.com/brunomaschietto/projeto-labook-backend"
                target="_blank"
                color={"blue"}
              >
                Code Review
              </Link>
            </Flex>
          </CardFooter>
        </Card>
      </Flex>
    </Flex>
  );
};

export default Body;
