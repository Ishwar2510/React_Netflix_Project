import React from 'react'
import Homepage from '../Pages/Homepage/Homepage';
import Login from "../Pages/login/Login";
import Register from "../Pages/register/Register";
import Watch from "../Pages/watch/Watch";
import {Routes,Route} from 'react-router-dom'

function CRoutes(){
    console.log("routes called")
    return <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Homepage/>}/>
         <Route path="/home" element={<Homepage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/watch" element={<Watch/>}/>
        <Route path="*"  element ={<h1>ERROR 404 Page Does not Exist You are in Wrong URL </h1>}/>
    </Routes>
    
}
export default CRoutes;