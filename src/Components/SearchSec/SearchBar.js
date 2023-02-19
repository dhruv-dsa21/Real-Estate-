import React from "react";
import {
  HStack,
  Heading,
  Flex,
  Select,
  ButtonGroup,
  Button,
  useBreakpointValue,
  chakra,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { housesData } from "../../data";

const SearchBar = (props) => {
  const [country, setCountry] = useState("Select Country");
  const [property, setProperty] = useState("Select Type");
  const [price, setPrice] = useState("Select Price");
  const [move, setMove] = useState("Select moveIn");
  const [houses, setHouses] = useState(housesData);
  // const [active, setActive] = useState(false);

  //location section
  const allCountries = housesData.map((house) => {
    return house.country;
  });
  const uniqueCountries = [...new Set(allCountries)];

  const locationHandler = (event) => {
    setCountry(event.target.value);
  };
  //property type section

  const allPropertyTypes = housesData.map((house) => {
    return house.type;
  });
  const uniquePropertyTypes = [...new Set(allPropertyTypes)];

  const propertyTypeHandler = (event) => {
    setProperty(event.target.value);
  };

  //Price Section
  const prices = [
    { value: "20000 - 30000" },
    { value: "30000 - 110000" },
    { value: "110000 - 140000" },
    { value: "140000 - 170000" },
    { value: "170000 - 200000" },
    { value: "200000 - 230000" },
  ];

  const priceHandler = (event) => {
    setPrice(event.target.value);
  };

  //movein section
  const allmovein = housesData.map((house) => {
    return house.movein;
  });
  const uniquemoves = [...new Set(allmovein)];

  const moveHandler = (event) => {
    setMove(event.target.value);
  };

  //SearchHandler
  //Main search logic

  const searchHandler = () => {
    // checking selection
     
      
      const isDefault = (str) => {
      return str.split(" ").includes("Select");
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split("- ")[1]);

    const filteredHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      // no selection
      if (
        isDefault(country) &&
        isDefault(price) &&
        isDefault(property) &&
        isDefault(move)
      ) {
        return house;
      }

      // country is selected
      if (
        !isDefault(country) &&
        isDefault(price) &&
        isDefault(property) &&
        isDefault(move)
      ) {
        return house.country === country;
      }

      // price is selected
      if (
        isDefault(country) &&
        !isDefault(price) &&
        isDefault(property) &&
        isDefault(move)
      ) {
        return housePrice >= minPrice && housePrice <= maxPrice;
      }

      // property is selected
      if (
        isDefault(country) &&
        isDefault(price) &&
        !isDefault(property) &&
        isDefault(move)
      ) {
        return house.type === property;
      }

      if (
        isDefault(country) &&
        isDefault(price) &&
        isDefault(property) &&
        !isDefault(move)
      ) {
        return house.movein === move;
      }

      // country & price is selected
      if (
        !isDefault(country) &&
        !isDefault(price) &&
        isDefault(property) &&
        isDefault(move)
      ) {
        return (
          house.country === country &&
          housePrice >= minPrice &&
          housePrice <= maxPrice
        );
      }

      // country & property is selected
      if (
        !isDefault(country) &&
        isDefault(price) &&
        !isDefault(property) &&
        isDefault(move)
      ) {
        return house.country === country && house.type === property;
      }

      // price & property is selected
      if (
        isDefault(country) &&
        !isDefault(price) &&
        !isDefault(property) &&
        isDefault(move)
      ) {
        return (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.type === property
        );
      }
      //price and move selected
      if (
        isDefault(country) &&
        !isDefault(price) &&
        isDefault(property) &&
        !isDefault(move)
      ) {
        return (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.movein === move
        );
      }

      //move and country selected

      if (
        !isDefault(country) &&
        isDefault(price) &&
        isDefault(property) &&
        !isDefault(move)
      ) {
        return house.country === country && house.movein === move;
      }
      //move and property selected
      if (
        isDefault(country) &&
        isDefault(price) &&
        !isDefault(property) &&
        !isDefault(move)
      ) {
        return house.type === property && house.movein === move;
      }

      //move, price and property selected
      if (
        isDefault(country) &&
        !isDefault(price) &&
        !isDefault(property) &&
        !isDefault(move)
      ) {
        return (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.movein === move &&
          house.type === property
        );
      }

      //move, country and price selected
      if (
        !isDefault(country) &&
        !isDefault(price) &&
        isDefault(property) &&
        !isDefault(move)
      ) {
        return (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.movein === move &&
          house.country === country
        );
      }

      //move,country and property selected
      if (
        !isDefault(country) &&
        isDefault(price) &&
        !isDefault(property) &&
        !isDefault(move)
      ) {
        return (
          house.type === property &&
          house.movein === move &&
          house.country === country
        );
      }

      //country,property and price selected

      if (
        !isDefault(country) &&
        !isDefault(price) &&
        !isDefault(property) &&
        isDefault(move)
      ) {
        return (
          housePrice >= minPrice &&
          housePrice <= maxPrice &&
          house.type === property &&
          house.country === country
        );
      }

      // all are selected
      if (
        house.country === country &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        house.type === property &&
        house.movein === move
      ) {
        return house;
      }
    });

    // setHouses(filteredHouses)

    filteredHouses.length > 0 ? setHouses(filteredHouses) : setHouses([]);
   
  };
  

  //passing value to callback function passed through props
  useEffect(() => {
    console.log(houses);
    props.temp(houses);
  }, [houses]);

  return (
    <>
      <Flex width="80vw" m="auto" border={2} pt="4" flexDirection="column">
        <Heading> Search Properties to Rent</Heading>
        <Flex
          gap={{ base: 3, md: 2 }}
          direction={{ base: "column", md: "row" }}
          borderRadius="30"
          mt="5"
        >
          <Select placeholder="select country" onChange={locationHandler}>
            {uniqueCountries.map((country, index) => (
              <option key={index}>{country}</option>
            ))}
          </Select>

          <Select placeholder="select moveIn" onChange={moveHandler}>
            {uniquemoves.map((moves, index) => (
              <option key={index}>{moves}</option>
            ))}
          </Select>

          <Select placeholder="select type" onChange={propertyTypeHandler}>
            {uniquePropertyTypes.map((type, index) => (
              <option key={index}>{type}</option>
            ))}
          </Select>

          <Select placeholder="select price" onChange={priceHandler}>
            {prices.map((price, index) => (
              <option key={index}>{price.value}</option>
            ))}
          </Select>

          <Button onClick={searchHandler} p={{ base: 3, md: 2 }} size="100%">
            Search
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
export default SearchBar;
