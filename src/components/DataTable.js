
import MUIDataTable from "mui-datatables";



export default function DataTable({employeeData,gotoNextPage,rowClicked}) {

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

    const options = {
        selectableRows: 'single',
        selectableRowsOnClick: true,
        selectableRowsHideCheckboxes:false,
        responsive: "standard",
        selectToolbarPlacement:'none',
        onPageChange: gotoNextPage,
        onRowClick: (rowData) => rowClicked(rowData)
    }

  return (
    <>
    <MUIDataTable 
    title={"Employee List"} 
    data={employeeData} 
    columns={columns} 
    options={options}
    />
    </>
  );
}


