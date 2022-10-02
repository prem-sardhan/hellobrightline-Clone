import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./StyleNavbar.css";
import About from "./About.jsx";
import Employ from "./Employ";
import Family from "./Family";
import Careers from "./Careers";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";

// import { unstable_HistoryRouter } from "react-router-dom";
import { Stack, Container, Flex, Spacer, Button } from "@chakra-ui/react";

import AllRoutes from "./AllRoutes";


const handlClick=()=>{
  Login()
  
}

const Navbar = () => {
  // const links = [
  //   { path: "/", title: "Home" },
  //   { path: "/Family", title: "Family" },
  //   { path: "/Login", title: "Login" },
  //   { path: "/Employ", title: "Employ" },
  //   { path: "/Careers", title: "Careers" },
  //   { path: "/About", title: "About" },
  // ];

 

  return (
    <>
    
    <div className="div-1">
      <div className="div-1a">
        {/* LOGO_________DIV______ */}
       
        
        <div>
          <Home />
        </div>

        <div className="div-about">
         
          <About />
        </div>

        <div> <Employ /></div>
         
        <div> <Family /></div>
         
        <div> <Careers /></div>
         
      </div>

      <div className="div-1b">
        <div>
          
         <Link to="/Login"> <Button className="loginbtn" border="solid" color="black" colorScheme="none" mt="18px" ml="60px" borderRadius="30px">
              Log in
            </Button></Link>
         
        </div>

        <div><Link to="/Signup"> <Button className="loginbtn" border="solid" color="black" colorScheme="none" mt="18px" ml="60px" borderRadius="30px">
             Sign Up
            </Button></Link></div>
      </div>



      
    </div>

    
    
    
    
    </>
  );
};

export default Navbar;
