import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Image,
  Text,
  Wrap,
  Stack,
  Flex,
  Badge,
  Heading,
  Button,
} from '@chakra-ui/react';
import { MinusIcon, SmallAddIcon } from '@chakra-ui/icons';
import { products } from '../../Mock/ProductsMock';


const ProductScreen = () => {
  const [amount, setAmount] = useState(1);
  let { id } = useParams();
  let product = products.find(product => product._id === id);

  const changeAmount = (input) => {
    if (input === 'plus') {
      setAmount(amount + 1);
    }
    if (input === 'minus') {
      setAmount(amount - 1);
    }
  };

  return (
    <Wrap spacing='30px' justify='center' minHeight='100vh'>
        {product && (
          <Box
            maxW={{ base: '3xl', lg: '5xl' }}
            mx='auto'
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}>
            <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }}>
              <Stack
                pr={{ base: '0', md: '12' }}
                spacing={{ base: '8', md: '4' }}
                flex='1.5'
                mb={{ base: '12', md: 'none' }}>
                {product.productIsNew && (
                  <Badge rounded='full' w='40px' fontSize='0.8em' colorScheme='green'>
                    New
                  </Badge>
                )}
                {product.stock === 0 && (
                  <Badge rounded='full' w='70px' fontSize='0.8em' colorScheme='red'>
                    Sold out
                  </Badge>
                )}
                <Heading fontSize='2xl' fontWeight='extrabold'>
                  {product.name}
                </Heading>
                <Stack spacing='5'>
                  <Box>
                    <Text fontSize='xl'>${product.price}</Text>
                  </Box>
                  <Text>{product.description}</Text>
                  <Text fontWeight={'bold'}>Quantity</Text>
                  <Flex w='170px' p='5px' border='1px' borderColor='gray.200' alignItems='center'>
                    <Button isDisabled={amount <= 1} onClick={() => changeAmount('minus')}>
                      <MinusIcon />
                    </Button>
                    <Text mx='30px'>{amount}</Text>
                    <Button isDisabled={amount >= product.stock} onClick={() => changeAmount('plus')}>
                      <SmallAddIcon w='20px' h='25px' />
                    </Button>
                  </Flex>
                  <Button isDisabled={product.stock === 0} colorScheme='orange' onClick={() => {}}>
                    Add to cart
                  </Button>
                </Stack>
              </Stack>
              <Flex direction='column' align='center' flex='1' _dark={{ bg: 'gray.900' }}>
                <Image mb='30px' src={product.image} alt={product.name} />
              </Flex>
            </Stack>
          </Box>
        )}
    </Wrap>
  );
};

export default ProductScreen;