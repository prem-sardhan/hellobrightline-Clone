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
  
  const Family = () => {
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
            For Families
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold"> For Families</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="green">
                <TabList  display="flex" flexDirection="column" textAlign="start">
                  <Tab
                    _focus={{ boxShadow: 'none' }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%" display="flex" flexDirection="column">
                   <a className='elements' href="https://www.hellobrightline.com/membership">Membership </a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/pricing">Pricing</a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/coaching">Coaching</a>
                   <Spacer/>
                   <br />

                   <a className='elements' href="https://www.hellobrightline.com/care">Care</a>
                   <Spacer/>
                   <br />


                   <a className='elements' href="https://www.hellobrightline.com/faq">FAQ</a>
                   
                  
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
  
  export default Family;