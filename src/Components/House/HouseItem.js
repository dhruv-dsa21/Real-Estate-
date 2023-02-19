import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";



const HouseItem = (props) => {
  console.log(props.house)
  let houseData = [];
 
  if(props.house.length===2){
    houseData = props.house[1];
  }else{
    houseData = props.house;
  }
  
  
  return (
    <Flex justify='center' align='center'>
        <Stack justify='center' width="300px" bg="white" boxShadow="xl" borderRadius="xl">
        <Image src={houseData.imageLg} h='170' alt='houses' />

        <VStack p='4' align='left'>
            <Text mt="-1" fontWeight="extrabold" fontSize="18px" color="teal.500">
            Rs.{houseData.price}
            <span style={{ fontSize: 12, color: "grey", fontWeight: "normal" }}>
                /month
            </span>
            </Text>

            <Heading fontSize="24px" letterSpacing="tight">
            {houseData.name}
            </Heading>

            <Text fontSize="13px" color="grey">
             {houseData.address}
            </Text>

            <Divider my="2.5" />

            <HStack spacing="5">
            <HStack>
                <BiBed style={{ color: "#008080" }} />
                <Text fontSize="12px">{houseData.bedrooms}</Text>
            </HStack>

            <HStack>
                <BiBath style={{ color: "#008080" }} />
                <Text fontSize="12px">{houseData.bathrooms}</Text>
            </HStack>

            <HStack>
                <BiArea style={{ color: "#008080" }} />
                <Text fontSize="12px">{houseData.surface}</Text>
            </HStack>
            </HStack>

        </VStack>
        </Stack>
    </Flex>
  );
};

export default HouseItem;