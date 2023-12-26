import axios from "axios";

export const getAll = async () => {
    try {
        let response = await axios.get("http://localhost:8080/tasks");
        return response.data;
    } catch (e) {
        return undefined;
    }
};

export const saveTask = async (task) => {
    try {
        await axios.post("http://localhost:8080/tasks", task);
        return true
    } catch (e) {
        return false;
    }
};