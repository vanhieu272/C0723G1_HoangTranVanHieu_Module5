import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        phone: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required')
    });

    const handleSubmit = (values, { resetForm }) => {
        // Thực hiện xử lý khi form được submit
        alert('Add contact successfully!!!');
        // Xử lý thêm liên hệ ở đây (ví dụ: gửi request API)
        // Sau đó reset form bằng cách sử dụng resetForm từ Formik
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <div>
                    <label>Name:</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="span" />
                </div>
                <div>
                    <label>Email:</label>
                    <Field type="text" name="email" />
                    <ErrorMessage name="email" component="span" />
                </div>
                <div>
                    <label>Phone:</label>
                    <Field type="text" name="phone" />
                    <ErrorMessage name="phone" component="span" />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default AddContactForm;