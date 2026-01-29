import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      bg="whiteAlpha.50"
      borderWidth="1px"
      borderColor="whiteAlpha.200"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "2xl",
        borderColor: "cyan.400",
      }}
      transition="all 0.3s ease"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box position="relative" overflow="hidden" height="200px">
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.1)" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.600"
          opacity={0}
          _hover={{ opacity: 1 }}
          transition="opacity 0.3s ease"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Link href={project.liveUrl} isExternal>
            <Box
              p={3}
              bg="whiteAlpha.200"
              borderRadius="full"
              _hover={{ bg: "cyan.500" }}
              transition="all 0.2s"
            >
              <ExternalLinkIcon boxSize={5} />
            </Box>
          </Link>
          <Link href={project.githubUrl} isExternal>
            <Box
              p={3}
              bg="whiteAlpha.200"
              borderRadius="full"
              _hover={{ bg: "purple.500" }}
              transition="all 0.2s"
            >
              <Icon as={FaGithub} boxSize={5} />
            </Box>
          </Link>
        </Box>
      </Box>

      <VStack align="stretch" p={6} spacing={4} flex={1}>
        <Heading as="h3" size="md" color="white">
          {project.title}
        </Heading>

        <Text fontSize="sm" color="gray.400" lineHeight="tall" flex={1}>
          {project.description}
        </Text>

        <Flex flexWrap="wrap" gap={2}>
          {project.technologies.map((tech, index) => (
            <Box
              key={index}
              px={3}
              py={1}
              borderRadius="md"
              bg="whiteAlpha.100"
              borderWidth="1px"
              borderColor="whiteAlpha.300"
              fontSize="xs"
              color="cyan.400"
              fontFamily="mono"
            >
              {tech}
            </Box>
          ))}
        </Flex>

        <HStack spacing={4} pt={2}>
          <Link
            href={project.liveUrl}
            isExternal
            fontSize="sm"
            color="cyan.400"
            fontWeight="semibold"
            _hover={{ color: "cyan.300", textDecoration: "underline" }}
          >
            Live Demo →
          </Link>
          <Link
            href={project.githubUrl}
            isExternal
            fontSize="sm"
            color="purple.400"
            fontWeight="semibold"
            _hover={{ color: "purple.300", textDecoration: "underline" }}
          >
            Code →
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProjectCard;