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

