import {NavLink} from "react-router-dom";
import * as contractService from "../../service/contractService";
import {useEffect, useState} from "react";
import {DeleteContract} from "./DeleteContract";

export function ContractList() {
    const [contracts,setContracts] = useState([]);
    const [contractNumber,setContractNumber] = useState("");
    const [show,setShow] = useState(false);
    const [select,setSelect] = useState(null)
    useEffect(() =>{
        getData();
    },[contractNumber])
    const getData = async () => {
        let data = await contractService.getALlContract(contractNumber);
        setContracts(data);
    }

    const closeModal = async () => {
        getData()
        setSelect(null)
        setShow(false);
    }
    const showModal = async (contract) =>{
        setSelect(contract);
        setShow(true);
    }

    return(
        <div className="container-fluid">
            <h1 id="bd" className="h3 mb-2 text-gray-800">Contract List</h1>
            <NavLink to="/contracts/create">
                <button type="button" className="btn btn-outline-success">Create Contract</button><br/>
            </NavLink>
            <input type="text" placeholder="Please input contract search" style={{width:"15%",borderRadius:"10px",padding:"5px"}} onChange={event => setContractNumber(event.target.value)}/>
            <div className="card-body">
                <div className="table-responsive" style={{overflowX: "visible"}}>
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                        <tr>
                            <th>N0.</th>
                            <th>Contract Number</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Deposit Amount</th>
                            <th>Total PaymentAmount</th>
                            <th colSpan="2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                    {contracts.map((item,index) =>
                        <tr key={item.id}>
                            <td>{index+1}</td>
                            <td>{item.contractNumber}</td>
                            <td>{ new Date(item.startDate).toLocaleDateString('en-US')}</td>
                            <td>{new Date(item.endDate).toLocaleDateString('en-US')}</td>
                            <td>{ new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(item.depositAmount)}</td>
                            <td>{ new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                            }).format(item.totalPaymentAmount)}</td>
                            <td>
                                <NavLink to={`/contracts/edit/${item.id}`}>
                                    <button type="button" className="btn btn-outline-warning"><i
                                        className="fa-solid fa-pen-to-square"></i></button>
                                </NavLink>
                            </td>
                            <td>
                              <button type={"button"} className="btn btn-outline-danger"><i
                                  className="fa-solid fa-trash" onClick={() =>showModal(item)}></i></button>
                            </td>
                        </tr>
                    )}
                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteContract
                show={show}
                select={select}
                close={closeModal}
            >

            </DeleteContract>
        </div>
    )
}