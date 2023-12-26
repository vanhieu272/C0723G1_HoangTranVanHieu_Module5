import axios from "axios";
import {useEffect, useState} from "react";

const ToDoList = ()=> {
    const[tasks, setTasks] = useState([]);

    const [newTask, setNewTask] = useState({
        title: '',
        completed: false,
        userId: 1
    });

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                setTasks(response.data);
            })
    }, [tasks]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.title.trim() !== '') {
            axios.post('https://jsonplaceholder.typicode.com/todos', newTask)
                .then((response) => {
                    console.log('Task added:', response.data);
                    setNewTask(
                        newTask
                    );
                    return axios.get('https://jsonplaceholder.typicode.com/todos');
                })
                .catch((error) => {
                    console.error('Error adding task:', error);
                });
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={newTask.title}
                    onChange={handleInputChange}
                    placeholder="Enter task"
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task) =>(
                    <li key={task.id}>{task.userId} , {task.title}, {task.completed ? 'done': 'not done'}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;