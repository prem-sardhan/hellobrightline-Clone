import React from 'react'
import { Link } from 'react-router-dom';
import "./StyleNavbar.css";
import AllRoutes from './AllRoutes';

const Home = () => {
  return (
   <>
    <Link to="/"> <img className='homeimage'
     src="https://www.hellobrightline.com/assets/brightline-logo.svg?w=163&h=40&fit=thumb&fm=png&q=90"
            alt="error" 
          /> </Link>
    
   </>
  )
}

export default Home