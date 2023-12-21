import './App.css';
import MedicalForm from "./components/MedicalForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import ContactForm from "./components/ContactForm";


function App() {
  return (
    <>
      <ContactForm></ContactForm>
        <MedicalForm/>
        <ToastContainer>
        </ToastContainer>
    </>
  );
}

export default App;
