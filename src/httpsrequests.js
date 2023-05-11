import { BASE_URL } from "./base_URL.js";
import axios from "axios";

//get all orders
export const getAllOrders = async()=>{
    let globalData;
    await axios.get(`${BASE_URL}/orders`)
    .then(res=>{
        globalData = res.data;
    })
    return globalData;
}
//delete orders by id

export const deleteSupplierByID = id =>{
    axios.delete(`${BASE_URL}/orders/${id}`);
}
//post orders 

// export const postSupplier = (payload)=>{
//     axios.post(`${BASE_URL}/orders`,payload);
// }