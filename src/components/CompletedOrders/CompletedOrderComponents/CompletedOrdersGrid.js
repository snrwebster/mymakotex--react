import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { apiRequest } from "../../../apiRequest";
import { Button } from "@mui/material";
import printImage from "../../../assets/images/print.png";

const CompletedOrdersGrid = ({ t, orders }) => {
  const [rowOnCompletedOrders, setRowOnCompletedOrders] = useState(null);
  const [rowsOrdersDetails,setRowsOrdersDetails]= useState([]);
  const [completedOrderDetails, setCompletedOrdersDetails] = useState(null);
  const [printCompletedOrderId,setPrintCompletedOrderId] = useState(null);

  const handleOnRowSelection = (selectionModel) => {
    const selectedOrderId = selectionModel[0];
    setRowOnCompletedOrders(selectedOrderId);
  };
  const handlePrintOrder= (orderId)=>{
    setPrintCompletedOrderId(orderId);
  }
  useEffect(() => {
    if (rowOnCompletedOrders !== null) {
      const endpoint = "SelectFromMobile";
      const method = "GET";
      let data = {
        columns: "*",
        table: `parmtrlines_gr where docid = ${rowOnCompletedOrders}`,
      };
      apiRequest(endpoint, data, method).then((response) => {
        if (response.result.length > 0) {
          setCompletedOrdersDetails(response.result);
          console.log(response.result);
        }
      });
    }
  }, [rowOnCompletedOrders]);

  const columnsOrders = [
    {
      field: "dateOfOrder",
      headerAlign: "center",
      headerName: t("Date of Order"),
      flex: 1,
      align: "center",
    },
    {
      field: "docNumber",
      headerAlign: "center",
      headerName: t("Document Number"),
      flex: 1,
      align: "center",
    },
    {
      field: "OrderNumber",
      headerAlign: "center",
      headerName: t("Order Number"),
      flex: 1,
      align: "center",
    },
    {
      field: "PoNumber",
      headerAlign: "center",
      headerName: t("Po Number"),
      flex: 1,
      align: "center",
    },
    {
      field: "MakeLabelNumber",
      headerAlign: "center",
      headerName: t("Make Label Number"),
      flex: 1,
      align: "center",
    },
    {
      field: "PrintOut",
      headerAlign: "center",
      headerName: "",
      flex: 0.5,
      align: "center",
      renderCell: (params) => (
        <button style={{border:'none' ,backgroundColor:'transparent',width:'100%',cursor:'pointer'}}
        onClick={()=>handlePrintOrder(params.row.id)}
        >
          {params.value}
        </button>
      )
    },
  ];
  const rowsOrders = [];
  if (orders.length > 0) {
    for (const order of orders) {
      const docid = order["DOCID"];
      const dateOfOrderStr = order["Date of Order"];
      const dateOfOrderObj = new Date(dateOfOrderStr);
      const dateOfOrder = dateOfOrderObj.toLocaleDateString("en-US");
      const documentNumber = order["Document Number"];
      const makeLabelNumber =
        typeof order["MakeLabel Number"] === "string"
          ? order["MakeLabel Number"]
          : "";
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
        PrintOut:<img src={printImage} style={{background:"transparent"}} width={'23px'} alt="Print" />,
      };

      rowsOrders.push(row);
    }
  }
  const columnsOrdersDetails = [
    {
      field: "itemCode",
      headerAlign: "center",
      headerName: t("Item Code"),
      flex: 1,
      align: "center",
    },
    {
      field: "shippingDate",
      headerAlign: "center",
      headerName: t("Shipping Date"),
      flex: 1,
      align: "center",
    },
    {
      field: "deliveryNoteNumber",
      headerAlign: "center",
      headerName: t("Delivery Note Number"),
      flex: 1,
      align: "center",
    },
    {
      field: "description",
      headerAlign: "center",
      headerName: t("Description"),
      flex: 1,
      align: "center",
    },
    {
      field: "quantity",
      headerAlign: "center",
      headerName: t("Quantity"),
      flex: 1,
      align: "center",
    },
    {
      field: "price",
      headerAlign: "center",
      headerName: t("Price"),
      flex: 1,
      align: "center",
      renderCell: (params) => (
        <Button variant="contained" color="primary"
        >
          {params.value}
        </Button>
      ),
    },
    {
      field: "itemMoves",
      headerAlign: "center",
      headerName: t("Item Moves"),
      flex: 1,
      align: "center",
      renderCell: (params) => (
        <Button variant="contained" color="primary">
          {params.value}
        </Button>
      ),
    },
  ];
  
  useEffect(() => {
    if (completedOrderDetails!== null){
      const dumbArray = [];
      for (let i = 0; i < completedOrderDetails.length; i++) {
        const rowId= i+1;
        const itemCode = completedOrderDetails[i]['κωδικός'];
        const shippingDateObj = new Date(completedOrderDetails[i]['Ημερ.Παρ.']);
        const shippingDate=shippingDateObj.toLocaleDateString("en-US");
        const notes = completedOrderDetails[i]['Νοτεσ'];
        const description = completedOrderDetails[i]['Περιγραφή'];
        const quantity = completedOrderDetails[i]['Ποσότητα'];
      
      const detailRow = {
        id: rowId, // You can use a unique ID here
        itemCode: itemCode,
        shippingDate: shippingDate,
        deliveryNoteNumber: notes,
        description: description,
        quantity: quantity,
        price:t("Price"),
        itemMoves:t("Item Moves")
      };
      
      dumbArray.push(detailRow);
    }
      setRowsOrdersDetails(dumbArray);
    }
  }, [completedOrderDetails]);

  return (
    <div style={{overflow:"auto"}}>
      <div style={{ height: 300, width: "100%", display: "flex", zIndex: 1 }}>
        <DataGrid
          rows={rowsOrders}
          columns={columnsOrders}
          noRowsOverlay={<>{"test"}</>}
          onRowSelectionModelChange={handleOnRowSelection}
        />
      </div>
      <div
        style={{
          height: 300,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "50px" ,height:'inherit'}}>
          <h2>{t("Selected Order's Items:")}</h2>
          <DataGrid
            width={"90%"}
            rows={rowsOrdersDetails}
            columns={columnsOrdersDetails}
            noRowsOverlay={<>{"test"}</>}
          />
        </div>
      </div>
    </div>
  );
};

export default CompletedOrdersGrid;
