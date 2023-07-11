import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/img1.gif"
import Common from "./common";


const About = () =>{
    return(
        <>
            <Common name='Welcome to About Page'
             imgsrc={web} 
             visit="/contact" 
             btnname="Contact Now" />
        </>
    )
}
export default About;