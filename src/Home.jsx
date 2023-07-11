import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/img1.gif";
import Common from "./common";


const Home = () =>{
    return(
        <>
           <Common name='Grow Your Business With'
             imgsrc={web} 
             visit="/services" 
             btnname="Get Started"/>
        </>
    )
}
export default Home;