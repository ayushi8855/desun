import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { Box, Flex, Text,Button } from '@chakra-ui/react'

export const Home = () => {

const [data,setdata] =useState([])

useEffect(()=>{
    const getdata=()=>{
        axios.get("http://localhost:8080/game").then((res)=>{
            console.log(res.data)
            setdata(res.data)
          })
    }
   getdata()
},[])

const handlecart=(e)=>{
    axios.post('http://localhost:8080/cart', {
        name: e.name,
        price: e.price
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
    
  return (
    <Flex marginTop={6} justifyContent="space-around">
        {data.map((e)=>{
            return <Box>
                <Text fontSize='2xl'>{e.name}</Text>
                <Text fontSize='xl'>{e.price}</Text>
                <Button onClick={()=>handlecart(e)}>Add To Cart</Button>
            </Box>
        })}
    </Flex>
  )
}
