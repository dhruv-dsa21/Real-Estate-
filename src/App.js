import React from 'react';
import {useState} from 'react';
import Header from './Components/MainHeader/Header';
import SearchBar from './Components/SearchSec/SearchBar';
import HouseDisplay from './Components/House/HouseDisplay';
import { housesData } from "./data";
import {} from "@chakra-ui/react";
function App() {
 const [data,setData] = useState(housesData);

 const results = (payload)=>{
  let obj = {};
  obj = Object.entries(payload);
  console.log(obj);
    setData(obj);
 }
  return (
    <>
     <Header />
     <SearchBar temp = {results}/>
     <HouseDisplay house = {data} />
    </>
  );
}

export default App;
