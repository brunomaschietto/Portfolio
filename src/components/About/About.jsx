import { Box, Container, Flex, Heading, Image, Text, SimpleGrid } from "@chakra-ui/react";
import profilePic from "../../assets/profilePic.png";

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "10+" },
  ];

  return (
    <Container maxW="container.xl" py={20} id="about">
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        mb={12}
        textAlign="center"
      >
        <Text as="span" color="cyan.400" fontWeight="bold">
          01.
        </Text>{" "}
        About Me
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={12}
        align="center"
        justify="space-between"
      >
        <Box flex={1} maxW={{ base: "100%", md: "50%" }}>
          <Text fontSize="lg" color="gray.300" lineHeight="tall" mb={6}>
            Hello! I'm <Text as="span" color="cyan.400" fontWeight="semibold">Bruno Maschietto</Text>, 
            a passionate Full-Stack Developer and Mechanical Engineer based in the interior of São Paulo, Brazil.
          </Text>

          <Text fontSize="lg" color="gray.300" lineHeight="tall" mb={6}>
            I love building thoughtful digital experiences that solve real problems. 
            My journey in tech combines my engineering background with modern web development, 
            allowing me to approach challenges with both technical precision and creative thinking.
          </Text>

          <Text fontSize="lg" color="gray.300" lineHeight="tall" mb={8}>
            When I'm not coding, you'll find me staying active as a sports enthusiast, 
            always looking for the next challenge both in and out of the tech world.
          </Text>

          <SimpleGrid columns={3} spacing={6}>
            {stats.map((stat, index) => (
              <Box
                key={index}
                textAlign="center"
                p={4}
                borderRadius="lg"
                bg="whiteAlpha.50"
                borderWidth="1px"
                borderColor="whiteAlpha.200"
                _hover={{
                  bg: "whiteAlpha.100",
                  transform: "translateY(-4px)",
                  boxShadow: "lg",
                }}
                transition="all 0.3s ease"
              >
                <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, cyan.400, purple.400)"
                  bgClip="text"
                >
                  {stat.value}
                </Text>
                <Text fontSize="sm" color="gray.400" mt={1}>
                  {stat.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/* Imagem */}
        <Box
          flex={1}
          maxW={{ base: "300px", md: "400px" }}
          position="relative"
        >
          <Box
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "20px",
              left: "20px",
              width: "100%",
              height: "100%",
              border: "2px solid",
              borderColor: "cyan.400",
              borderRadius: "lg",
              zIndex: -1,
              transition: "all 0.3s ease",
            }}
            _hover={{
              _before: {
                top: "10px",
                left: "10px",
              },
            }}
          >
            <Image
              src={profilePic}
              alt="Bruno Maschietto"
              borderRadius="lg"
              objectFit="cover"
              width="100%"
              height="100%"
              filter="grayscale(30%)"
              _hover={{
                filter: "grayscale(0%)",
              }}
              transition="filter 0.3s ease"
            />
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default About;