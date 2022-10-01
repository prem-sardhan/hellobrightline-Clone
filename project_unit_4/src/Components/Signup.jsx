import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  
  } from '@chakra-ui/react';
   
    
    
   
  import AllRoutes from './AllRoutes';
  import Home from './Home';

  
 
  
  export default function Signup() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Access Denied...! </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
            We are not yet accepting registrations from your location.<Link to="/" color={'blue.400'}>Happy to see you</Link> ✌️
            </Text>
           

   
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }