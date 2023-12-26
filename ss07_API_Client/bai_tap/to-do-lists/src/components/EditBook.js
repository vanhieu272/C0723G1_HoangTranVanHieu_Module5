import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as bookServices from "../service/BookServices";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export function EditBook() {
    const navigate = useNavigate();
    const [book, setBook] = useState();
    const { id } = useParams();
    useEffect(() => {
        findById();
    }, []);
    const findById = async () => {
        let data = await bookServices.findById(id);
        console.log(data);
        setBook(data);
    };
    const updateBook = (values) => {
        let isSuccess = bookServices.updateBook(values, book);
        if (isSuccess) {
            toast.success("Edited success");
            navigate("/books");
        }
    };
    if (!book) {
        return null;
    }
    return (
        <>
            <div className="container">
                <h1>Update book</h1>
                <Formik
                    initialValues={{ ...book }}
                    onSubmit={(values) => {
                        updateBook(values);
                    }}
                >
                    <Form>
                        <Field
                            type="hidden"
                            name="id"
                            class="form-control"
                            id="id"
                            aria-describedby="emailHelp"
                        />
                        <div className="mb-3">
                            <label htmlFor="exampleInputTitle" className="form-label">
                                Title
                            </label>
                            <Field
                                type="text"
                                name="title"
                                class="form-control"
                                id="exampleInputTitle"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputQuantity" className="form-label">
                                Quantity
                            </label>
                            <Field
                                type="number"
                                name="quantity"
                                class="form-control"
                                id="exampleInputQuantity"
                            />
                        </div>
                        <button type="submit" className="btn btn-success">
                            Save
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}