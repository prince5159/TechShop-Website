import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => {
    return <>
        <footer class="bg-light text-center my-4 pt-3">
            <div>
                <a class="btn btn-floating m-1" href="https://touch.facebook.com/prince.ruhela.965" target="_blank">
                    <FacebookIcon />
                </a>
                <a class="btn btn-floating m-1" href="https://www.instagram.com/__ruhela/" target="_blank">
                    <InstagramIcon />
                </a>
                <a class="btn btn-floating m-1" href="https://www.linkedin.com/in/prince-ruhela-a3428a194/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a class="btn btn-floating m-1" href="https://github.com/prince5159" target="_blank">
                    <GitHubIcon />
                </a>
            </div>
                © 2021 Copyright. All Rights Reserved.
                <strong>
                <NavLink class="nav-link" to="/"> TechShop</NavLink>
            </strong>
        </footer>

    </>
}

export default Footer;