import { Box, Flex, Text, Button, Select, Link } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";
  
export const Cart = () => {
  const [data, setdata] = useState([])
  // const [dateRange, setDateRange] = useState([moment(), moment()]);
  const [startDate, setStartDate] = useState(new Date("2022/02/08"));
  const [endDate, setEndDate] = useState(new Date("2022/02/10"));
  const [total, setTotal] = useState(0);
  const [distance , setdistance] = useState(0)
  const [cost, setcost] = useState(0)
  const [grandtotal, setgrandtotal]=useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    const getdata = () => {
      axios.get("http://localhost:8080/cart").then((res) => {
        console.log(res.data)
        setdata(res.data)
      })
    }
    getdata()
    subTotal()
    transport()
    Total()
  
  }, [])

  const subTotal = () => {
    const sum = data.reduce((accumulator, e) => {
      return accumulator + e.price;
    }, 0);
    setTotal(sum);
  }

  const Total = () => {
  let sum= total+cost
    setgrandtotal(sum);
  }

  const transport=()=>{
    console.log(distance)
    if(distance>0 && distance<=30){
      setcost(1500)
    }
    else{
      setcost((distance-30)*50)
    }
  }

  const handlechange = (e) => {
     if(e.value==="Baghajatin, Kolkata, WB"){
      setdistance(10)
      
     }
     else if(e.value==="Garia, Kolkata, WB"){
      setdistance(20)
    
     }
     else if(e.value=== "Sealdaha, Kolkata, WB"){
      setdistance(30)
     
     }else if(e.value=== "Jadavpur, Kolkata, WB"){
      setdistance(40)
     
     }
     

  }

  return (
    <Flex marginTop={6} justifyContent="space-around">
      <Box>
        {data.map((e) => {
          return <Box>
            <Text fontSize='2xl'>Name:-{e.name}</Text>
            <Text fontSize='xl'>Price:-{e.price}</Text>
            <Box>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}

              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}

              />
            </Box>

          </Box>
        })}
      </Box>
      <Box borderLeft="2px solid black" >
        <Text fontSize='xl' m={2}> Add Location</Text>
        <Select placeholder='Select option' m={2} onSelect={(e) => handlechange(e.value)}>
          <option value='Baghajatin, Kolkata, WB'>Baghajatin, Kolkata, WB</option>
          <option value='Garia, Kolkata, WB'>Garia, Kolkata, WB</option>
          <option value='Sealdaha, Kolkata, WB'>Sealdaha, Kolkata, WB</option>
          <option value='Jadavpur, Kolkata, WB'>Jadavpur, Kolkata, WB</option>
        </Select>
        <Text>SubTotal - {total}</Text>
        <Text>Transport Cost - {cost} </Text>
       
   <hr></hr>
        <Text>Grand Total - {grandtotal} </Text>
        <hr></hr>   
     <Button bg="black" color="white" m={2} w="200px" onClick={()=>{ navigate ("/checkout") }}>  Check Out </Button>     
      </Box>
     
    </Flex>
  )
}
