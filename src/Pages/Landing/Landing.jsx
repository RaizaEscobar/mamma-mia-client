
import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Skeleton,
    Stack,
    useColorModeValue,
    Text,
  } from '@chakra-ui/react';
  import { FaArrowRight } from 'react-icons/fa';
  import { Link as ReactLink } from 'react-router-dom';
  import { GiItalia } from 'react-icons/gi';
  import Cover from '../../Assets/Images/cover.png';
  
  const Landing = () => (
    <Box maxW='8xl' mx='auto' px={{ base: '0', lg: '12' }} py={{ base: '0', lg: '12' }} minH='6xl'>
      <Stack direction={{ base: 'column-reverse', lg: 'row' }} spacing={{ base: '0', lg: '20' }}>
        <Box
          width={{ lg: 'sm' }}
          bg='transparent'
          mx={{ base: '6', md: '8', lg: '0' }}
          px={{ base: '6', md: '8', lg: '0' }}
          py={{ base: '6', md: '8', lg: '12' }}>
          <Stack spacing={{ base: '8', lg: '10' }} justifyContent='center' height='100%'>
            <Stack spacing={{ base: '2', lg: '4' }}>
              <Flex alignItems='center'>
                <Icon as={GiItalia} h={12} w={12} color='#2F855A'/>
                <Text fontSize='4xl' fontWeight='bold'>
                  Mamma mia
                </Text>
              </Flex>
              <Heading size='xl' fontWeight='normal'>
                Come a casa
              </Heading>
            </Stack>
            <HStack spacing='3'>
              <Link
                as={ReactLink}
                to='/products'
                color='#C53030'
                fontWeight='bold'
                fontSize='lg'>
                Discover all our products
              </Link>
              <Icon color='#C53030' as={FaArrowRight} />
            </HStack>
          </Stack>
        </Box>
        <Flex flex='1' overflow='hidden'>
          <Image
            src={Cover}
            alt='cover'
            fallback={<Skeleton />}
            maxH='900px'
            minW='300px'
            objectFit='cover'
            flex='1'
          />
        </Flex>
      </Stack>
    </Box>
  );
  
  export default Landing;