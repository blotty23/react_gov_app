
import React, {useState, useEffect} from 'react'
import axios from 'axios'


import Heading from '@govuk-react/heading';


import DataTable from '../components/DataTable'



export default function MyEmployeesPage () {

  const [employeeData, setEmployeeData] = useState([])
  const [loading, setLoading] = useState(false)
  

  // setEmployeeData = 
  
  useEffect(()=> {
    setLoading(true)
    let cancel
    axios.get('https://pokeapi.co/api/v2/pokemon', {
      cancelToken: new axios.CancelToken (c => cancel = c)
    }).then(res =>{
      setLoading(false)
      setEmployeeData(res.data.results)
    })
    return () => {cancel()}
  },[])

  function gotoNextPage() {
    return(
      console.log("pageChanged!")
    )
  }
  function rowClicked(data) {
    return(
      console.log(data)
    )
  }


  return (
    <>
      <Heading>My Employees</Heading>
  
      <DataTable 
      employeeData={employeeData} 
      gotoNextPage={gotoNextPage()}
      rowClicked={rowClicked}
      />
    </>
  )
}


