import axios from "axios";

export const getAll = async () =>{
    try {
        let res = await axios.get("http://localhost:8080/books");
        return res.data;
    } catch (e) {
        return undefined;
    }
};

export const saveBook = async (book) =>{
    try {
        await axios.post("http://localhost:8080/books",book);
        return true;
    } catch (e) {
        return false;
    }
}

export const deleteBook = async (id) =>{
    try {
        await axios.delete(`http://localhost:8080/books/${id}`);
        return true;
    } catch (e) {
        return false;
    }
}
export const findById = async (id) =>{
    try {
        let res = await axios.get(`http://localhost:8080/books/${id}`);
        return res.data;
    } catch (e) {
        return undefined;
    }
}
export const updateBook = async (book) =>{
    try {
        await axios.patch(`http://localhost:8080/books/${book.id}`,book);
        return true;
    } catch (e) {
        return false;
    }
}