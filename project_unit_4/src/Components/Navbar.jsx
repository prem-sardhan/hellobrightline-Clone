import React from "react";
import { Link } from "react-router-dom"
import "./StyleNavbar.css";
import About from "./About.jsx";
import Employ from "./Employ";
import Family from "./Family";
import Careers from "./Careers";
import Login from "./Login";
import Home from "./Home";
import { Stack, Container, Flex, Spacer, Button } from "@chakra-ui/react";

import AllRoutes from "./AllRoutes";

const Navbar = () => {
  const links=[
    {path: "/", title:"Home"},
    {path: "/Family", title:"Family"},
    {path: "/Login", title:"Login"},
    {path: "/Employ", title:"Employ"},
    {path: "/Careers", title:"Careers"},
    {path: "/About", title:"About"},
]

 
  return (
    <div className="div-1">
      <div className="div-1a">
        {/* LOGO_________DIV______ */}
        <div><Home/></div>
          
          
        
       

        <div className="div-about"> <About/></div>
         
        <div><Employ/></div>
        <div><Family /></div>
        <div><Careers/> </div>









       
      </div>

      <div className="div-1b">
        <div>
          <Link to={<Login/>}> <Button 
             
             colorScheme="green"
             mt="18px" ml="60px" textAlign="center" >
        Log in
           </Button></Link>
           </div>
          
          
       

          
        
        <div>signup</div>
      </div>
    </div>
  );
};

export default Navbar;
