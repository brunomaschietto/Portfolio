import { Box, Flex, Heading, Image, Link, Text, Container, VStack, HStack } from "@chakra-ui/react";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import githubIcon from "../../assets/githubIcon.png";
import instagramIcon from "../../assets/instagramIcon.svg";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bruno-maschietto/",
      icon: linkedinIcon,
    },
    {
      name: "GitHub",
      url: "https://github.com/brunomaschietto",
      icon: githubIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/brunomaschietto/",
      icon: instagramIcon,
    },
  ];

  return (
    <Box
      as="footer"
      bg="gray.900"
      borderTop="1px solid"
      borderColor="whiteAlpha.200"
      py={12}
      mt={20}
      id="contact"
    >
      <Container maxW="container.xl">
        <VStack spacing={8}>
          {/* Heading */}
          <Heading
            color="white"
            size="lg"
            textAlign="center"
            bgGradient="linear(to-r, cyan.400, purple.400)"
            bgClip="text"
          >
            Let's get to know each other
          </Heading>

          {/* Social Links */}
          <HStack spacing={6}>
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ transform: "translateY(-8px)" }}
                transition="all 0.3s ease"
              >
                <Box
                  p={3}
                  borderRadius="lg"
                  bg="whiteAlpha.100"
                  borderWidth="1px"
                  borderColor="whiteAlpha.200"
                  _hover={{
                    bg: "whiteAlpha.200",
                    borderColor: "cyan.400",
                    boxShadow: "0 0 20px rgba(66, 153, 225, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    height="48px"
                    width="48px"
                  />
                </Box>
              </Link>
            ))}
          </HStack>

          {/* Divider line */}
          <Box width="100%" height="1px" bg="whiteAlpha.200" />

          {/* Copyright */}
          <Text color="gray.400" fontSize="sm" textAlign="center">
            Copyright © {new Date().getFullYear()} • Designed & Built by{" "}
            <Text as="span" color="cyan.400" fontWeight="semibold">
              Bruno Maschietto
            </Text>
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;