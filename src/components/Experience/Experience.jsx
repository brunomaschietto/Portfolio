import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "LEGNET | Gestão em Conformidade",
      period: "May 2024 - Present",
      description: "Developed new features and maintained existing web applications. Refactored legacy code to improve performance and maintainability. Built and consumed REST APIs, creating optimized database queries. Actively participated in system evolution and continuous improvement initiatives.",
      technologies: ["JavaScript", "PHP", "Python", "React", "Firebird", "Git"],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Facility Hotel",
      period: "Feb 2024 - Apr 2024",
      description: "Developed web applications for the Facility Hotel system. Implemented frontend features using Bootstrap and JavaScript. Built backend services using Java, Spring Boot, and SQL. Collaborated on system improvements and feature delivery.",
      technologies: ["JavaScript", "Bootstrap", "Java", "Spring Boot", "SQL", "Git"],
    },
    {
      id: 3,
      title: "Junior Developer",
      company: "Nasajon",
      period: "May 2023 - Dec 2023",
      description: "Identified and fixed software bugs in production systems. Developed custom solutions based on specific client requirements. Contributed to system enhancements focused on usability and operational efficiency. Worked closely with different parts of the system to support continuous improvements.",
      technologies: ["Delphi","JavaScript", "PHP", "SQL", "Git"],
    },
  ];

  return (
    <Container maxW="container.xl" py={20} id="experience">
      <Heading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        mb={12}
        textAlign="center"
      >
        <Text as="span" color="cyan.400" fontWeight="bold">
          02.
        </Text>{" "}
        Professional Experience
      </Heading>

      <VStack spacing={8} align="stretch">
        {experiences.map((exp, index) => (
          <Box
            key={exp.id}
            p={8}
            borderRadius="xl"
            bg="whiteAlpha.50"
            borderWidth="1px"
            borderColor="whiteAlpha.200"
            position="relative"
            _hover={{
              bg: "whiteAlpha.100",
              transform: "translateY(-4px)",
              boxShadow: "2xl",
              borderColor: "cyan.400",
            }}
            transition="all 0.3s ease"
          >
            {/* Badge de número */}
            <Box
              position="absolute"
              top={-3}
              left={8}
              bg="gray.900"
              px={3}
              py={1}
              borderRadius="full"
              borderWidth="1px"
              borderColor="cyan.400"
            >
              <Text fontSize="sm" color="cyan.400" fontWeight="bold">
                {String(index + 1).padStart(2, "0")}
              </Text>
            </Box>

            <Flex
              direction={{ base: "column", md: "row" }}
              justify="space-between"
              align={{ base: "flex-start", md: "center" }}
              mb={4}
            >
              <Box>
                <Heading as="h3" size="lg" color="white" mb={1}>
                  {exp.title}
                </Heading>
                <Text
                  fontSize="lg"
                  bgGradient="linear(to-r, cyan.400, purple.400)"
                  bgClip="text"
                  fontWeight="semibold"
                >
                  {exp.company}
                </Text>
              </Box>
              <Text
                fontSize="md"
                color="gray.400"
                fontFamily="mono"
                mt={{ base: 2, md: 0 }}
              >
                {exp.period}
              </Text>
            </Flex>

            <Text fontSize="md" color="gray.300" lineHeight="tall" mb={4}>
              {exp.description}
            </Text>

            <Flex flexWrap="wrap" gap={2}>
              {exp.technologies.map((tech) => (
                <Box
                  key={tech}
                  px={3}
                  py={1}
                  borderRadius="md"
                  bg="whiteAlpha.100"
                  borderWidth="1px"
                  borderColor="whiteAlpha.300"
                  fontSize="sm"
                  color="cyan.400"
                  fontFamily="mono"
                  _hover={{
                    bg: "whiteAlpha.200",
                    borderColor: "cyan.400",
                  }}
                  transition="all 0.2s ease"
                >
                  {tech}
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Experience;