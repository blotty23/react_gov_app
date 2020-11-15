import { useState } from "react";

import TopNavHeader from './components/TopNavHeader'
import MyEmployeesPage from './pages/myEmployeesPage'

import Page from '@govuk-react/page';

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
  const [currentPage, setCurrentPage] = useState("myEmployees")

  function RenderPage() {
    switch (currentPage) {
      case "myEmployees":
        return (<MyEmployeesPage />);

    }
  }
  return (
    <Page 
      header={
        <TopNavHeader 
          currentPage={currentPage}
        linksList={linksList}
        />
      }>
      {RenderPage()}
      </Page>
  );
}

export default App;
