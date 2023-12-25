import axios from "axios";

const URL_TYPE = "http://localhost:8080/customerType";

export const getAllTypeCustomer = async () =>{
    try {
        let result = await axios.get(URL_TYPE);
        return result.data
    }catch (e){
        console.log(e)
    }

}