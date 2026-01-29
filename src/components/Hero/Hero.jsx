import { Box, Flex, Heading, Text, Button, Container } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Container maxW="container.xl" minH="100vh" display="flex" alignItems="center" py={10}>
      <Flex direction="column" gap={6} maxW="800px">
        <Text
          fontSize="lg"
          color="cyan.400"
          fontWeight="medium"
        >
          Hi, my name is
        </Text>

        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, purple.400)"
          bgClip="text"
          lineHeight="1.2"
        >
          Bruno Maschietto
        </Heading>

        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="gray.400"
          lineHeight="1.2"
        >
          Full-Stack Developer
        </Heading>

        <Text
          fontSize={{ base: "md", md: "lg" }}
          color="gray.400"
          maxW="600px"
          lineHeight="tall"
        >
          I'm a Full-Stack Developer and Mechanical Engineer with{" "}
          <Text as="span" color="cyan.400" fontWeight="semibold">
            3 years of experience
          </Text>{" "}
          building exceptional digital experiences. Currently based in São Paulo, Brazil,
          I specialize in creating thoughtful and user-centric applications.
        </Text>

        <Box>
          <Button
            as="a"
            href="#projects"
            size="lg"
            bgGradient="linear(to-r, cyan.500, purple.500)"
            color="white"
            _hover={{
              bgGradient: "linear(to-r, cyan.600, purple.600)",
              transform: "translateY(-2px)",
              boxShadow: "xl",
            }}
            transition="all 0.3s ease"
            px={8}
          >
            View My Work
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

export default Hero;