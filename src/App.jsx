import React from 'react'

import ApiCalling_lec50 from './Component/ApiCalling_lec50'
import PostApi_lec51 from './Component/PostApi_lec51'
import DeletApi_lec52 from './Component/DeletApi_lec52'
import PreFillForm from './Component/PreFillForm'
import UpdateApi from './Component/UpdateApi'
import './index.css'; // or './App.css'

const App = () => {
 
  return (
    <>
     <h1 className='text-4xl font-bold text-center text-gray-700' >Api Methods </h1> 

     <ApiCalling_lec50/>
     <PostApi_lec51/>
     <DeletApi_lec52/>
     <PreFillForm/> 
     <UpdateApi/>
    </>
  )
}

export default App
