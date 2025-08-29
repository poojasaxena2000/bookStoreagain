import React from 'react'
import Home from './home/Home'
// import Course from './component/Course';
import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses';
import Signup from './component/Signup';
import { useAuth } from './context/AuthProvider';

import  { Toaster } from 'react-hot-toast';

const App = () => {

 const [authUser,setAuthUser]=useAuth()
  console.log(authUser ,"jdhcsdsj")

  return (
    <>
     <div className='dark:bg-slate-900 dark:text-white'>
      {/* <Home/>
      <Course/> */}

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={ authUser? <Courses/>:<Navigate to="/signup"/>}/>
         <Route path='/signup' element={<Signup/>}/>

      </Routes>
       <Toaster />
    </div>
    </>
  )
}

export default App
