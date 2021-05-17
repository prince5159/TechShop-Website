import React from "react";
import { NavLink } from "react-router-dom";
import homeImg from "./images/home1.jpg";
import Common from "./Common";

const Home = () => {
    return <>
        <Common
        description="Grow your business with"
        desc2="We are the team of IITians cum talented developer making websites."
        brandName = "TechShop"
        btnName = "Get Started"
        btnRender="/service"
        imgSrc = {homeImg}
        imgAlt = "Home-image"
        />
    </>
}

export default Home;