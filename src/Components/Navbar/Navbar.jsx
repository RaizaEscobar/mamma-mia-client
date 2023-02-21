import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useDisclosure,
  Button,
  Stack,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { GiItalia } from "react-icons/gi";

const links = [
  { linkName: "Products", path: "/products" },
  { linkName: <CartWidget />, path: '/cart' },
  { linkName: "FAQ", path: "/support" },
];

const NavLink = ({ path, children }) => (
  <Link
    as={ReactLink}
    to={path}
    px={2}
    py={2}
    rounded="md"
    _hover={{ textDecoration: "none", bg: "gray.200" }}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box bg="gray.100" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack>
          <Link as={ReactLink} to="/" style={{ textDecoration: "none" }}>
            <Flex alignItems="center">
              <Icon as={GiItalia} h={6} w={6} color="#2F855A" />
              <Text fontWeight="extrabold">Mamma mia</Text>
            </Flex>
          </Link>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Button
            as={ReactLink}
            to="/login"
            p={2}
            fontSize="sm"
            fontWeight={400}
            variant="link"
          >
            Sign In
          </Button>
          <Button
            as={ReactLink}
            to="/registration"
            m={2}
            display={{ base: "none", md: "inline-flex" }}
            fontSize="sm"
            fontWeight={600}
            _hover={{ bg: "#2F855A" }}
            bg="#C53030"
            color="white"
          >
            Sign Up
          </Button>
        </Flex>
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                {link.linkName}
              </NavLink>
            ))}
            <NavLink key="sign up" path="/registration">
              Sign Up
            </NavLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
