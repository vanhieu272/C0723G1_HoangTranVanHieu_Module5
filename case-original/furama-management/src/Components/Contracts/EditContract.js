import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import * as contractService from '../../service/contractService';
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
export function EditContract(){
    const {contractID} = useParams();
    const [contract,setContract] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        getContractByID();
    },[]);

    const getContractByID = async () =>{
        let result = await contractService.getContractByID(contractID)
        console.log(result)
        setContract(result)
    }

    const submit = async (contract) => {
        let result = await contractService.updateContract(contract)
        if (result.status === 200){
            toast.success("Update success")
            navigate("/contracts")
        }else {
            toast.error("Failed")
        }
    }

    const validateObject = {
        contractNumber: Yup.string()
            .required()
            .matches(/^HD-[\d]{3}$/,"Invalid contract number (HD-XXX)"),
        startDate: Yup.date()
            .required()
            .min(new Date(),"Must be greater than the current date"),
        endDate: Yup.date()
            .required()
            .min(new Date,"Must be greater than the current date"),
        depositAmount: Yup.number()
            .required(),
        totalPaymentAmount: Yup.number()
            .required()
    }
    if (!contract){
        return null
    }
    return(
        <Formik
            initialValues={contract}
            onSubmit={(contract) => submit(contract)}
            validationSchema={Yup.object(validateObject)}>
            <div className="container px-5 my-5">
                <h2 style={{marginLeft:'7%'}}>EDIT CONTRACT</h2>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="contractNumber"><b>Contract Number</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="contractNumber" type="text" placeholder="Contract Number" name="contractNumber"/>
                        <ErrorMessage className="error" name='contractNumber' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="startDate"><b>Start Date</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" name="startDate" id="startDate" type="date" placeholder="Start Date"/>
                        <ErrorMessage className="error" name='startDate' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="endDate"><b>End Date</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="endDate" name="endDate" type="date" placeholder="End Date"/>
                        <ErrorMessage className="error" name='endDate' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="depositAmount"><b>Deposit Amount</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="depositAmount" name="depositAmount" type="text" placeholder="Deposit Amount"/>
                        <ErrorMessage className="error" name='depositAmount' component='div' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="totalPaymentAmount"><b>Total Payment Amount</b><span style={{color:"red"}}>*</span></label>
                        <Field className="form-control" id="totalPaymentAmount" name="totalPaymentAmount" type="text" placeholder="Total Payment Amount"/>
                        <ErrorMessage className="error" name='totalPaymentAmount' component='div' />
                    </div>
                    <div className="d-grid">
                        <button type='submit' style={{width:"20%",marginLeft:"38%"}}  className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )

}