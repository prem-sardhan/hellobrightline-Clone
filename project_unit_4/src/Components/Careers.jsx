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
  } from '@chakra-ui/react';
  import { ChevronDownIcon } from '@chakra-ui/icons';
  import "./StyleNavbar.css";
  
  const Careers = () => {
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
           Careers
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">  Careers</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="green">
                <TabList  display="flex" flexDirection="column">
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%" display="flex" flexDirection="column">
                   <a className='elements' href="https://www.hellobrightline.com/careers"> Opportunuty</a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/careers/care-team"> Care plans</a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/careers/tech">Tech Hiring</a>
                   <Spacer/>
                   <br />

                   
                   
                  
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
  
  export default Careers;