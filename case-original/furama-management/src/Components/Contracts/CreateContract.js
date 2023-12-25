import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import * as contractService from "../../service/contractService"
import {toast} from "react-toastify";

export function CreateContract() {
    const navigate = useNavigate();

    const initValue = {
        contractNumber: "",
        startDate:"",
        endDate : "",
        depositAmount : "",
        totalPaymentAmount: null
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
    const submit = async (contract) =>{
        let result = await contractService.saveContract(contract)
        console.log(result)
        if (result.status === 201){
            navigate("/contracts")
            toast.success("Save success")
        }else {
            toast.error("Failed")
        }
    }

    return(
        <Formik initialValues={initValue}
                onSubmit={values =>submit(values)}
                validationSchema={Yup.object(validateObject)}>
            <div className="container px-5 my-5">
                <h2 style={{marginLeft:'17%'}}>Create contract</h2>
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