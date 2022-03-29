import React from 'react'
import Todo from './components/Todo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" />
      <Todo />
    </>
  )
}

export default App
