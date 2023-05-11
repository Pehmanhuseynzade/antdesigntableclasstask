import { useEffect, useState } from "react";
import { getAllOrders } from "./httpsrequests";
import { BASE_URL } from "./base_URL.js";
import { Button } from 'antd';
import axios from "axios";



import { Table } from "antd";
const handleDelete = async (id) => {
     try {
       await axios.delete(`${BASE_URL}${id}`);
       setOrders(orders.filter((order) => order.id !== id));
       message.success("Order deleted successfully!");
     } catch (error) {
       console.error("Error deleting order:", error);
     }
   };
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "customer Id",
    dataIndex: "customerId",
    sorter: (a, b) => a.customerId - b.customerId,
   

  
  },
  {
    title: "Employee ID",
    dataIndex: "employeeId",
    sorter: (a, b) => a.employeeId - b.employeeId,

  },
  {
    title: "Delete",
    dataIndex: "orderId",
    key: "2",
     render:() => ( <Button onClick={handleDelete} type="primary" danger>
     Delete
   </Button>)
  },
  {
    title: "Update",
    dataIndex: "address",
    key: "3",
  },
];


const Tabled = () => {
  let [orders, setOrders] = useState([]);
  useEffect(() => { getAllOrders().then((data) => {
     setOrders(data)
          })}, []);
  return (
    <Table
      columns={columns}
      dataSource={orders}
      scroll={{
        x: 1300,
      }}
    />
  );
};

export default Tabled;
