import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Flex,
    Spacer,
    Input,
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import "./StyleNavbar.css";
  
  const About = () => {

    
    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button className='btn-1'
              rightIcon={<ChevronDownIcon />}
              colorScheme="green"
              w="fit-content">
             About
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">About</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="green">
                <TabList  display="flex" flexDirection="column" >
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%" display="flex" flexDirection="column">
                      
                   <a className='elements' href="https://www.hellobrightline.com/the-brightline-experience">The Brightline experience </a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/approach-to-care">Our Approach</a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/research">Our Research</a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/about-us">About us</a>
                   <Spacer/>
                   <br />


                   <a className='elements' href="https://www.hellobrightline.com/blog">Blog</a>
                   
                  
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%">
                   
                  </Tab>
                </TabList>
               
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  };
  
  export default About;