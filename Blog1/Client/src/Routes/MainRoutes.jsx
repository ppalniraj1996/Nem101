import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateData from '../Components/CreateData'
import DeletePage from '../Components/DeletePage'
import EditPage from '../Components/EditPage'
import MainPage from '../Components/MainPage'


const MainRoutes = () => {
  return (
    <div>
     
        <Routes>
            <Route path="/" element={<MainPage/>}></Route>
            <Route path="/blogs/:_id/edit"  element={<EditPage/>} ></Route>
            <Route path="/blogs/:_id"  element={<DeletePage/>} ></Route>
            <Route path="/blogs/create"  element={<CreateData/>} ></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes