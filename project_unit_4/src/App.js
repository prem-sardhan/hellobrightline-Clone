import React from 'react'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Landing from './LandingComponent/Landing'
import AllRoutes from './Components/AllRoutes'


const App = () => {
  return (
    <>
    <Navbar/>
    {/* <Landing/> */}
    <AllRoutes/>
    <Landing/>
   
    
    </>
   
  )
}

export default App