import { useState } from "react";

import TopNavHeader from './components/TopNavHeader'

const adminTopLinks = [
  {
    id:"home",
    name: "Home", 
    link: "/"
  },
  {
    id:"myProfile",
    name: "My Profile", 
    link: "/profile"
  },
  {
    id:"myEmployees",
    name: "My Employees", 
    link: "/employees"
  },
  {
    id:"visitors",
    name: "Visitors", 
    link: "/visitors"
  }
]

function App() {
  const [linksList, setLinksList] = useState(adminTopLinks)
  const [userType, setUserType] = useState("admin")
  const [currentPage, setCurrentPage] = useState("myEmployees")



  return (
    <TopNavHeader 
      currentPage={currentPage}
      linksList={linksList} 
    />
  );
}

export default App;
