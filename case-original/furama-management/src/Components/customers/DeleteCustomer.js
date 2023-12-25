import * as customerService from "../../service/customerService"
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
export function DeleteCustomer({show, closeModal, select}) {
    const navigate = useNavigate();
    const remove = async (select) => {
      let deleteCustomer = await customerService.deleteCustomer(select)
        if (deleteCustomer.status === 200){
            closeModal();
            navigate("/customers")
            toast.success("Delete success");
        }else {
            toast.warning("Failed")
        }
    }

    return (

        <>
            {
                show && (
                    <div className="modal" tabIndex="-1" style={{display: 'block'}}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Confirm Deletion</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
                                            onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Do you want to delete<span style={{color:"red"}}> {select.name}?</span></p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={closeModal}>Close
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

