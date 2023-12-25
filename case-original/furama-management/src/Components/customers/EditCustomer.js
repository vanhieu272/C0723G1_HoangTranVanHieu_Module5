import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import * as customerTypeService from "../../service/customerTypeService"
import * as customerService from "../../service/customerService"
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

export function EditCustomer() {
    const [customer, setCustomer] = useState();
    const {customerId} = useParams();
    const [type, setType] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getCustomerByID();
        display();
    }, [])

    const getCustomerByID = async () => {
        let result = await customerService.customerByID(customerId);
        setCustomer(result);
    }
    const display = async () => {
        let result = await customerTypeService.getAllTypeCustomer();
        setType(result);
    }

    const updateCustomer = async (customer) => {
        let customerEdit = {...customer, customerType: JSON.parse(customer.customerType)}
        let edit = await customerService.editCustomer(customerEdit)
        if (edit.status === 200) {
            navigate("/customers")
            toast.success("Update success")
        }
    }
    if (!customer) {
        return null;
    }


    const validateObject = {
        name: Yup.string()
            .required("Required"),
        birthday: Yup.date()
            .required("Required"),
        address: Yup.string()
            .required("Required"),
        gender: Yup.string()
            .required("Required"),
        phoneNumber: Yup.string()
            .required("Required"),
        // .matches(/^[a-zA-z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/, "Invalid email address"),
        email: Yup.string()
            .required("Required"),

    }
    const initValue = {
        id: customer.id,
        name: customer.name,
        birthday:customer.birthday,
        gender: customer.gender +"",
        address: customer.address,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
        customerType: JSON.stringify(customer.customerType)
    }
    return (
        <Formik initialValues={initValue} onSubmit={(customer) => updateCustomer(customer)}
                validationSchema={Yup.object(validateObject)}>
            <div className="container px-5 my-5">
                <h2 style={{marginLeft: '7%'}}>Update information Customer</h2>
                <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="fullName"><b>Full name</b><span
                            style={{color: "red"}}>*</span></label>
                        <Field className="form-control" id="fullName" type="text" placeholder="Full name" name="name"/>
                        <ErrorMessage className="error" name='name' component='div'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="birthday"><b>Birthday</b><span
                            style={{color: "red"}}>*</span></label>
                        <Field className="form-control" name="birthday" id="birthday" type="date"
                               placeholder="Birthday"/>
                        <ErrorMessage className="error" name='name' component='div'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="address"><b>Address</b><span
                            style={{color: "red"}}>*</span></label>
                        <Field className="form-control" id="address" name="address" type="text" placeholder="Address"/>
                        <ErrorMessage className="error" name='address' component='div'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block"><b>Gender</b><span style={{color: "red"}}>*</span></label>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" id="men" type="radio" name="gender" value="1"/>
                            <label className="form-check-label" htmlFor="men">Men</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <Field className="form-check-input" id="female" type="radio" name="gender" value="0"/>
                            <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="phoneNumber"><b>Phone number</b><span
                            style={{color: "red"}}>*</span></label>
                        <Field className="form-control" id="phoneNumber" name="phoneNumber" type="text"
                               placeholder="Phone number"/>
                        <ErrorMessage className="error" name='phoneNumber' component='div'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email"><b>email</b><span
                            style={{color: "red"}}>*</span></label>
                        <Field className="form-control" id="email" name="email" type="text"
                               placeholder="Room rented"/>
                        <ErrorMessage className="error" name='email' component='div'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="typeCustomer"><b>Type customer</b><span
                            style={{color: "red"}}>*</span></label>
                        <Field as="select" className="form-select" id="typeCustomer" aria-label="Type customer"
                               name="customerType">
                            {type.map((item) =>
                                <option key={item.id} value={JSON.stringify(item)}>{item.name}</option>
                            )}
                        </Field>
                    </div>
                    <div className="d-grid">
                        <button type='submit' style={{width:"20%",marginLeft:"38%"}} className='btn btn-primary'>Submit</button>
                    </div>
                </Form>
            </div>
        </Formik>
    )


}