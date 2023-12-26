import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as bookServices from "../service/BookServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function CreateBook() {
    const navigate = useNavigate();
    const initValue = {
        title: "",
        quantity: 0,
    };
    const createBook = (book) => {
        let isSuccess = bookServices.saveBook(book);
        if (isSuccess) {
            toast.success("Create success!");
            navigate("/books");
        }
    };
    return (
        <>
            <div className="container">
                <h1>Add a new book</h1>
                <Formik
                    initialValues={initValue}
                    onSubmit={(book) => {
                        createBook(book);
                    }}
                >
                    <Form>
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
                            Add
                        </button>
                    </Form>
                </Formik>
            </div>

        </>
    );
}