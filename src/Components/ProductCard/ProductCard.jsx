import React from "react";
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  Button,
  Tooltip,
  Stack,
  Link,
  
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { Link as ReactLnk } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Stack
      p="2"
      spacing="3px"
      minW="240px"
      h="380px"
      border="3px"
      rounded="xl"
      shadow="lg"
      position="relative"
    >
      {product.isNew && (
        <Circle
          size="10px"
          bg="green.300"
          position="absolute"
          top="2"
          right="2"
        />
      )}
      {product.Stock <= 0 && (
        <Circle
          size="10px"
          bg="green.300"
          position="absolute"
          top="2"
          right="2"
        />
      )}
      <Image src={product.image} alt={product.name} roundedTop="lg" />
      <Box flex="1" maxH="5" alignItems="baseline">
        {product.stock <= 0 && (
          <Badge colorScheme="red" position="absolute" top="2" right="2">
            Out of stock
          </Badge>
        )}
        {product.isNew && (
          <Badge colorScheme="green" position="absolute" top="2" right="2">
            New
          </Badge>
        )}
      </Box>
      <Flex justifyContent="space-between" alignItems="baseline">
        <Link
          as={ReactLnk}
          to={`/products/${product._id}`}
          pt="2"
          cursor="pointer"
        >
          <Box fontSize="2x1" fontWeight="semibold" lineHeight="tight">
            {product.name}
          </Box>
        </Link>
      </Flex>
      <Flex justifyContent="space-between">
        <Box fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
          <Box as="span" color={"gray.600"} fontSize="lg">
            $
          </Box>
          {product.price}
        </Box>
        <Tooltip
          label="Add to cart"
          bg="white"
          placement={"top"}
          color={"gray.800"}
          fontSize={"1.2em"}
        >
          <Button
            variant="ghost"
            display={"flex"}
            isDisabled={product.stock <= 0}
          >
            <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
          </Button>
        </Tooltip>
      </Flex>
    </Stack>
  );
};

export default ProductCard;
