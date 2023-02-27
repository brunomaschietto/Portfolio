import { Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FooterStyled } from "./styles";
import linkedinIcon from "../../assets/linkedinIcon.svg";
import githubIcon from "../../assets/githubIcon.png";
import instagramIcon from "../../assets/instagramIcon.svg";

const Footer = () => {
  return (
    <FooterStyled>
      <Flex flexDirection={'column'} alignItems={'center'} gap={'10px'}>
        <Heading color={"white"} size={"lg"}>
          Let's get to know each other
        </Heading>
        <Flex gap={'10px'}>
          <Link
            href="https://www.linkedin.com/in/bruno-maschietto/"
            target="_blank"
          >
            <Image src={linkedinIcon} height={"48px"} />
          </Link>
          <Link
            href="https://github.com/brunomaschietto"
            target="_blank"
          >
            <Image src={githubIcon} height={"48px"} />
          </Link>
          <Link
            href="https://www.instagram.com/brunomaschietto/"
            target="_blank"
          >
            <Image src={instagramIcon} height={"48px"} />
          </Link>
        </Flex>
        <Text color={'white'}>
          Copyright © 2023 Design by Bruno Maschietto
        </Text>
      </Flex>
    </FooterStyled>
  );
};

export default Footer;
