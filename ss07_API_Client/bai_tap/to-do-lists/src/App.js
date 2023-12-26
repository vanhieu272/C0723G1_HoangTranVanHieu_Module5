
import './App.css';
import ToDoApp from "./components/ToDoList";
import {ToastContainer} from "react-toastify";
import { CreateBook } from './components/CreateBook';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {EditBook} from "./components/EditBook";
import {ListBooks} from "./components/ListBooks";

function App() {
  return (
    <>
      {/*<ToDoApp/>*/}
        <BrowserRouter>
        <Routes>
            <Route path="/books" element={<ListBooks/>}></Route>
            <Route path="/create" element={<CreateBook/>}></Route>
            <Route path="/update/:id" element={<EditBook/>}></Route>
        </Routes>
        </BrowserRouter>
        <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
