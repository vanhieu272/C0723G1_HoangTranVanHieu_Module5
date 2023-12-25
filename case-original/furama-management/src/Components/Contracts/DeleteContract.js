import * as contractService from "../../service/contractService"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
export function DeleteContract({show,select,close}) {
    const navigate = useNavigate();
    const remove = async (select) =>{
        let result = await contractService.deleteContract(select)

        if (result.status === 200){
            navigate("/contracts")
            close();
            toast.success("Remove success")
        }
        else {
            toast.success("Failed")
        }
    }
    return(
       <>
           {
               show && (
                   <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                       <div className="modal-dialog">
                           <div className="modal-content">
                               <div className="modal-header">
                                   <h5 className="modal-title">Confirm Deletion</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                           onClick={close}></button>
                               </div>
                               <div className="modal-body">
                                   <p>Do you want to delete<span style={{color:"red"}}> {select.contractNumber}?</span></p>
                               </div>
                               <div className="modal-footer">
                                   <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                           onClick={close}>Close
                                   </button>
                                   <button type="button" className="btn btn-primary"
                                           onClick={() => {
                                               remove(select)
                                           }}><i
                                       className="fa-solid fa-trash"></i>
                                   </button>
                               </div>
                           </div>
                       </div>
                   </div>
               )
           }
       </>
    )
}