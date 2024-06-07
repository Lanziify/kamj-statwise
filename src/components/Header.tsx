import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { IoMenuOutline } from "react-icons/io5";
import Logo from '../assets/Logo.png'
import React from "react";

const Header = () => {
  return (
    <Box px={6} position='sticky' top={0} zIndex={10} background='white'>
      <Flex justify='space-between' alignItems='center'>
        <Image src={Logo} boxSize='5rem' objectFit='contain' />
        <IconButton colorScheme="blue" aria-label="menu" icon={<IoMenuOutline />} />
      </Flex>
    </Box>
  );
};

export default Header;
