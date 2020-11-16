
import MUIDataTable from "mui-datatables";



export default function DataTable({employeeData,gotoNextPage,rowClicked}) {

  const columns = [
    {
     name: "firstName",
     label: "First Name",
     options: {
      sort: true,
     }
    },
    {
     name: "lastName",
     label: "Last Name",
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


