import { Box, Container, Divider, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Experience from "../Experience/Experience";

import javascriptIcon from "../../assets/javascriptIcon.svg";
import javaIcon from "../../assets/javaIcon.svg";
import awsIcon from "../../assets/awsIcon.svg";
import reactIcon from "../../assets/reactIcon.svg";
import sqlIcon from "../../assets/sqlIcon.png";
import pythonIcon from "../../assets/pythonIcon.svg";
import typescriptIcon from '../../assets/typescriptIcon.svg';
import gitIcon from '../../assets/gitIcon.svg';
import dockerIcon from '../../assets/dockerIcon.svg';
import nodejsIcon from '../../assets/nodejsIcon.svg';
import phpIcon from '../../assets/phpIcon.svg';
import fastApiIcon from '../../assets/fastApiIcon.svg';

import pokedexProject from "../../assets/pokedexProject.jpg";
import marvelWebsite from "../../assets/marvelWebsite.jpg";
import comicBookWebsite from "../../assets/comicBookStore.png";

import ProjectCard from "../ProjectCard/ProjectCard";

const Body = () => {
  const techStack = [
    { name: "JavaScript", icon: javascriptIcon },
    { name: "Java", icon: javaIcon },
    { name: "AWS", icon: awsIcon },
    { name: "React", icon: reactIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Python", icon: pythonIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Git", icon: gitIcon },
    { name: "Node", icon: nodejsIcon },
    { name: "PHP", icon: phpIcon },
    { name: "REST API", icon: fastApiIcon },
  ];

  const projects = [
    {
      id: 1,
      title: "Pokédex Project",
      description: "The site was developed so that the user has the ability to capture Pokémon and store them in their own Pokedex. There is also the option to observe the details of each Pokémon.",
      image: pokedexProject,
      technologies: ["React.js", "Styled-Components", "Chakra UI"],
      liveUrl: "https://projeto-pokedex-bruno-maschietto.surge.sh/",
      githubUrl: "https://github.com/brunomaschietto/projeto-react-apis",
    },
    {
      id: 2,
      title: "Marvel Website Project",
      description: "The site was developed with the intention of bringing to the user the option to connect with his favorite character, comic or creator and know more about them.",
      image: marvelWebsite,
      technologies: ["Next.js", "Styled-Components"],
      liveUrl: "https://frontend-test-two-bruno-maschietto.vercel.app/",
      githubUrl: "https://github.com/brunomaschietto/frontend-test-two",
    },
    {
      id: 3,
      title: "Comic Book Store",
      description: "I developed this website as part of a test in which participants created an e-commerce using an available API. My project consisted of a Marvel comics sales platform.",
      image: comicBookWebsite,
      technologies: ["Next.js", "Axios", "Styled-Components"],
      liveUrl: "https://desafio-neoapp.vercel.app/",
      githubUrl: "https://github.com/brunomaschietto/desafio-neoapp",
    },
  ];

  return (
    <Box>
      <Hero />

      <About />

      <Divider my={20} borderColor="whiteAlpha.200" />

      <Experience />

      <Divider my={20} borderColor="whiteAlpha.200" />

      <Container maxW="container.xl" py={20} id="techStack">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={12}
          textAlign="center"
        >
          <Box as="span" color="cyan.400" fontWeight="bold">
            03.
          </Box>{" "}
          Tech Stack
        </Heading>

        <SimpleGrid
          columns={{ base: 3, md: 4, lg: 6 }}
          spacing={8}
          justifyItems="center"
        >
          {techStack.map((tech, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="xl"
              bg="whiteAlpha.50"
              borderWidth="1px"
              borderColor="whiteAlpha.200"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={3}
              _hover={{
                bg: "whiteAlpha.100",
                transform: "translateY(-8px) scale(1.05)",
                borderColor: "cyan.400",
                boxShadow: "0 8px 30px rgba(66, 153, 225, 0.3)",
              }}
              transition="all 0.3s ease"
              cursor="pointer"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                height="50px"
                filter="grayscale(50%)"
                _groupHover={{ filter: "grayscale(0%)" }}
                transition="filter 0.3s ease"
              />
              <Box
                fontSize="sm"
                color="gray.400"
                fontWeight="medium"
                textAlign="center"
              >
                {tech.name}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Divider my={20} borderColor="whiteAlpha.200" />

      <Container maxW="container.xl" py={20} id="projects">
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={12}
          textAlign="center"
        >
          <Box as="span" color="cyan.400" fontWeight="bold">
            04.
          </Box>{" "}
          Featured Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Body;