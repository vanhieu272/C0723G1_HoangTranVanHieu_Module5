import axios from "axios";

const URL_CUSTOMERS ="http://localhost:8080/customers/";

export const getAll = async (nameSearch) =>{
    try {
        let result = await axios.get(URL_CUSTOMERS + `?name_like=${nameSearch}`)
        return result.data.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
        });
    }catch (e){
        console.log(e)
    }
}
export const saveCustomer = async (customer) =>{
    try {
         return  await axios.post(URL_CUSTOMERS,customer);

    }catch (e) {
        console.log(e)
    }
}
export const customerByID = async (customerID) =>{
    try {
        let customer = await axios.get(URL_CUSTOMERS +customerID)
        return customer.data;
    }catch (e) {
        console.log(e)
    }
}
export const editCustomer = async (customer) =>{
    try {
        return await  axios.put(URL_CUSTOMERS + customer.id,customer)
    }catch (e) {
        console.log(e)
    }
}
export const deleteCustomer = async (customer) =>{
    try {
        return await  axios.delete(URL_CUSTOMERS +customer.id)
    }catch (e){
        console.log(e)
    }
}