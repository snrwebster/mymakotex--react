import { DataGrid } from "@mui/x-data-grid";

const CompletedOrdersGrid = ({ t,orders }) => {
  const columns = [
    { field: "dateOfOrder", headerAlign: 'center', headerName: "Date of Order",flex:1},
    { field: "docNumber",  headerAlign: 'center',headerName: "Document Number", flex:1 },
    { field: "OrderNumber",  headerAlign: 'center',headerName: "Order Number",flex:1 },
    { field: "PoNumber",  headerAlign: 'center',headerName: "Po Number", flex:1 },
    { field: "MakeLabelNumber", headerAlign: 'center', headerName: "Make Label Number", flex:1},
    { field: "Print-out",  headerAlign: 'center',headerName: "", flex:0.5},
  ];
  const rows = [];
  if (orders.length > 0) {
    for (const order of orders) {
      const docid = order["DOCID"];
      const dateOfOrder = order["Date of Order"];
      const documentNumber = order["Document Number"];
      const makeLabelNumber = order["MakeLabel Number"];
      const orderNumber = order["Order Number"];
      const poNumber = order["Po Number"];
      const tracodeid = order["TRACODEID"];
      const dateID = order["dateID"];

      // Create a row object and add it to the rows array
      const row = {
        id: docid, // You can use a unique ID here
        dateOfOrder: dateOfOrder,
        docNumber: documentNumber,
        OrderNumber: orderNumber,
        PoNumber: poNumber,
        MakeLabelNumber: makeLabelNumber,
        // Add other columns as needed
      };

      rows.push(row);
    }
  }

  return (
    <>
      <div style={{ height: 500, width: "100%",display:'flex' }}>
        <DataGrid rows={rows} columns={columns}  noRowsOverlay={<p>{t('No data')}</p>}/>
      </div>
    </>
  );
};

export default CompletedOrdersGrid;
