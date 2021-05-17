import React from "react";
import { NavLink } from "react-router-dom";
import serviceImg from "./images/service.jpg";
import Common from "./Common";


const About = () => {
    return <>
        <Common
        description="Welcome to about page of"
        desc2="We are the team of IITians cum talented developer making websites."
        brandName = "TechShop"
        btnName = "Contact Now"
        btnRender="/contact"
        imgSrc = {serviceImg}
        imgAlt = "About-image"
        />
    </>
}

export default About;