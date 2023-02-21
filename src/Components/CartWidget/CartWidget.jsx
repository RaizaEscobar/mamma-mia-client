import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = () => {
    return (
      <Flex>
        <Text>5</Text>
        <Icon ml='-1.5' as={FiShoppingCart} h='4' w='7' alignSelf='center' />
        Cart
      </Flex>
    );
  };
export default CartWidget;  