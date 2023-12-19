import {useState} from "react";

//Bài này em có tham khảo GPT và đã hiểu + tự làm lại.
function TodoApp() {
    const [task, setTask] = useState('');
    const [tasksList, setTasksList] = useState([]);

    const handleChange = (event) => {
        setTask(event.target.value);
    };

    const handleAddItem = () => {
        if (task.trim() !== '') {
            setTasksList([...tasksList, task]);
            setTask('');
        }else {
            alert('Vui lòng nhập task')
        }
    };

    return (
        <div>
            <h1>To do List</h1>
            <input
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={handleChange}
            />
            <button onClick={handleAddItem}>Add</button>
            <ul>
                {tasksList.map((taskItem, index) => (
                    <li style={{listStyleType: 'none'}} key={index}>{taskItem}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
