
import MUIDataTable from "mui-datatables";



export default function DataTable({employeeData}) {

  const columns = [
    {
     name: "name",
     label: "Pokemon Name",
     options: {
      sort: true,
     }
    },
    {
     name: "url",
     label: "Pokemon Url",
     options: {
      filter: false,
      sort: false,
     }
    }]
  return (
    <>
    <MUIDataTable 
    title={"Employee List"} 
    data={employeeData} 
    columns={columns} 
    />

    </>
  );
}


