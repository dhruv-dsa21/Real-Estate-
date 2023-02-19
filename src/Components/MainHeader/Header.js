import React from 'react';
import{HStack,Heading,Flex,ButtonGroup,Button, useBreakpointValue,chakra} from "@chakra-ui/react";
import Mobile from './Mobile';

const Header = ()=>{
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return(
    <>
   <chakra.header id="header" borderBottom='1px solid rgb(0,0,0,0.3)'>
      <Flex w='100%' p='5' align='center' justify='space-between'>
        
          <Heading fontSize='3xl' color='teal.500'>Estatery.</Heading>
       
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing='5'>
                {
                  ['Home', 'Features', 'About Us'].map((item)=>(
                    <Button 
                    p = '2'
                    _hover={{
                      background: "teal.500",
                      color: "white",
                    }}
                    fontSize='16px' 
                    key={item}
                    >{item}</Button>
                    ))
                }
            </ButtonGroup>

            <HStack>
              <Button size='sm' variant='solid'>Contact</Button>
              <Button size='sm' variant='outline'>Sign up</Button>
            </HStack>
          </>
          ) : (
            <Mobile />
          )
        }
      </Flex>
      {/* <Divider color='pink.800' w={}='20px' />  */}
    </chakra.header>
    </>
  );
}

export default Header;

{/* <Container width="100vw" m="2">
<Flex m="5" justifyContent= 'space-between' alignItems="center" width="90vw">
  <Flex alignItems="center">
    <Heading mr="10"> Estatery</Heading>

    <HStack gap="2">
      <Button
        _hover={{
          background: "teal",
          color: "white",
        }}
      >
        Buy
      </Button>
      <Button  _hover={{
          background: "teal",
          color: "white",
        }}>
          Sell
        </Button>
     
      <Button  _hover={{
          background: "teal",
          color: "white",
        }}>
          Rent
        </Button>
    </HStack>
  </Flex>

  <Flex>
    <HStack gap="2">
      <Button colorScheme="teal">Sign Up</Button>
      <Button colorScheme="teal">Log in</Button>
    </HStack>
  </Flex>
</Flex>
</Container> */}