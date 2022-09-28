import React from 'react'
import{ Routes, Route} from "react-router-dom"
import Careers from './Careers'
import Employ from './Employ'
import Family from './Family'
import Login from './Login'
import Home from './Home'
import About from './About.jsx'


const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Careers' element={<Careers/>}></Route>
        <Route path='/Employ' element={<Employ/>}></Route>
        <Route path='/Family' element={<Family/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>



    </Routes>

    
    </>
  )
}

export default AllRoutes