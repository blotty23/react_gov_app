
import React, {useState, useEffect} from 'react'
import axios from 'axios'


import Heading from '@govuk-react/heading';


import DataTable from '../components/DataTable'


// const tempEmployeeData = [
//   {
//     "name":"bulbasaur",
//     "url":"https://pokeapi.co/api/v2/pokemon/1/"
//   },
//   {
//     "name":"ivysaur"
//     ,"url":"https://pokeapi.co/api/v2/pokemon/2/"
//   },
//   {
//     "name":"venusaur",
//     "url":"https://pokeapi.co/api/v2/pokemon/3/"
//   },
//   {
//     "name":"charmander",
//     "url":"https://pokeapi.co/api/v2/pokemon/4/"
//   },
//   {
//     "name":"charmeleon",
//     "url":"https://pokeapi.co/api/v2/pokemon/5/"
//   },
//   {
//     "name":"charizard",
//     "url":"https://pokeapi.co/api/v2/pokemon/6/"
//   },
//   ]


export default function MyEmployeesPage () {

  const [employeeData, setEmployeeData] = useState([])
  const [loading, setLoading] = useState(false)
  

  // setEmployeeData = 
  
  useEffect(()=> {
    setLoading(true)
    let cancel
    axios.get("https://pokeapi.co/api/v2/pokemon", {
      cancelToken: new axios.CancelToken (c => cancel = c)
    }).then(res =>{
      setLoading(false)
      setEmployeeData(res.data.results)
    })
    return () => {cancel()}
  },[])


  return (
    <>
      <Heading>My Employees</Heading>
  
      <DataTable employeeData={employeeData}/>
    </>
  )
}


