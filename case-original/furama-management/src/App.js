import logo from './logo.svg';
import './App.css';
import Home from "./Components/home";
import {Customers} from "./Components/customers/Customers";
import Header from "./Components/header";
import Footer from "./Components/footer";
import './Components/customers/customer.css'
import {CreateCustomers} from "./Components/customers/CreateCustomers";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import {EditCustomer} from "./Components/customers/EditCustomer";
import {ContractList} from "./Components/Contracts/ContractList";
import {CreateContract} from "./Components/Contracts/CreateContract";
import {EditContract} from "./Components/Contracts/EditContract";
function App() {
  return (
  <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/customers" element={<Customers/>}></Route>
        <Route path="/customers/create" element={<CreateCustomers/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/customers/edit/:customerId" element={<EditCustomer/>}></Route>
        <Route path="/contracts" element={<ContractList/>}></Route>
        <Route path="/contracts/create" element={<CreateContract/>}></Route>
        <Route path='/contracts/edit/:contractID' element={<EditContract/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    <ToastContainer></ToastContainer>

  </>
  );
}
export default App;
