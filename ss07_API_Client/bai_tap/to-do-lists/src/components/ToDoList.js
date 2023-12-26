import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';
import * as toDoAppService from "../service/ToDoListService";
import {getAll} from "../service/ToDoListService";
import {useEffect, useState} from "react";


function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const getAllTasks = async () => {
        return await toDoAppService.getAll().then();
    };
    useEffect(() => {
        getAllTasks().then((res) => {
            setTasks(res)
        });
    }, []);

    const initialValue = {
        task: ""
    };

    const validateObject = {
        task: Yup.string()
            .required("Task không được để trống!")
    };

    async function createTask(values) {
        let result = await toDoAppService.saveTask(values);
        if (result) {
            toast.success("Thêm mới thành công");
            await getAllTasks();
            setTasks(await getAllTasks());
        } else {
            toast.error("Có lỗi xảy ra");
        }
    }

    return <>
        <div className="container mt-4">
            <h1>Todo List</h1>
            <Formik
                initialValues={initialValue}
                onSubmit={(values) => {
                    createTask(values);
                }}
                validationSchema={Yup.object(validateObject)}
            >

                <Form>
                    <div className="d-flex">
                        <Field type="text" className="form-control" name="task"/>
                        <button className="btn btn-outline-dark" type="submit">Submit</button>
                        <ErrorMessage name="task" component="span" className="err-mess text-danger"/>
                    </div>
                </Form>
            </Formik>
            <div>
                <table className=" table mt-4">
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Task</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.task}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    </>
        ;
}

export default ToDoApp;