import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import { IoMenuOutline } from "react-icons/io5"
import Logo from "../assets/Logo.png"
import React from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef(null)
  const menuItems = [
    {
      heading: "Home",
      path: "hero",
    },
    {
      heading: "Service",
      path: "service",
    },
    {
      heading: "About",
      path: "about",
    },
    // {
    //   heading: "Lessons",
    //   path: "learn",
    // },
    // {
    //   heading: "Quizzes/Games",
    //   path: "quiz",
    // },
    // {
    //   heading: "Infographics",
    //   path: "",
    // },
    {
      heading: "Contact",
      path: "contact",
    },
  ]

  return (
    <Box px={6} position="sticky" top={0} zIndex={10} background="white">
      <Flex justify="space-between" alignItems="center">
        <NavLink to="/">
          <Image src={Logo} boxSize="5rem" objectFit="contain" />
        </NavLink>
        <IconButton
          ref={btnRef}
          colorScheme="blue"
          aria-label="menu"
          icon={<IoMenuOutline />}
          onClick={onOpen}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <DrawerBody>
            <Stack>
              {menuItems.map((menu, i) => (
                <Link
                  key={i}
                  to={menu.path}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  isDynamic={true}
                  style={{ cursor: "pointer" }}
                >
                  <Text>{menu.heading}</Text>
                </Link>
              ))}
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Header
