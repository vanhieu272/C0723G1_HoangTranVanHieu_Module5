import { useEffect, useState } from "react";
import * as bookServices from "../service/BookServices";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ListBooks() {
    const [books, setBooks] = useState([]);
    const [bookDelete, setBookDelete] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (book) => {
        setBookDelete(book);
        setShow(true)
    };


    useEffect(() => {
        getAll();
    }, []);
    const getAll = async () => {
        let data = await bookServices.getAll();
        setBooks(data);
    };

    const deleteBook = async () => {
        const isSuccess = await bookServices.deleteBook(bookDelete.id);
        if (isSuccess) {
            handleClose();
            toast.success("Deleted success");
           await getAll();
        }
    };
    if (!books) {
        return null;
    }
    return (
        <>
            <div className="container">
                <h3>Library</h3>
                <div className="text-end">
                    <Link
                        className="btn btn-sm btn-success rounded-0 mb-3"
                        type="button"
                        to="/create"
                    >
                        Add a new book
                    </Link>
                </div>
                <table class="table">
                    <thead class="table-dark">
                    <tr>
                        <th scope="col" className="col-6">
                            Title
                        </th>
                        <th scope="col" className="col-3">
                            Quantity
                        </th>
                        <th scope="col" className="col-3">
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.map((item) => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link
                                    className="btn btn-sm btn-primary rounded-0 me-3"
                                    type="button"
                                    to={`/update/${item.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    className="btn btn-sm btn-danger rounded-0"
                                    onClick={() => handleShow(item)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <Modal
                    show={show}
                    onHide={handleClose}
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this book?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={deleteBook} >Confirm</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    );
}