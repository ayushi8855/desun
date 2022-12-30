import { Box, Flex ,Text,Button} from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Cart = () => {
    const [data,setdata] =useState([])

useEffect(()=>{
    const getdata=()=>{
        axios.get("http://localhost:8080/cart").then((res)=>{
            console.log(res.data)
            setdata(res.data)
          })
    }
   getdata()
},[])
  return (
    <Flex marginTop={6} justifyContent="space-around">
    {data.map((e)=>{
        return <Box>
            <Text fontSize='2xl'>Name:-{e.name}</Text>
            <Text fontSize='xl'>Price:-{e.price}</Text>
           
        </Box>
    })}
</Flex>
  )
}
