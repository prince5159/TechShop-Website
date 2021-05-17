import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return <>
        <section id="header" className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-0 d-flex justify-content-center flex-column">
                                <h1>{props.description}
                                    <strong className="brand-name"> {props.brandName}</strong>
                                </h1>
                                <h2 className="my-3">{props.desc2}</h2>
                                <div>
                                    <NavLink to="/service" className="btn btn-outline-primary px-4">{props.btnName}</NavLink>
                                </div>
                            </div>

                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgSrc} className="image-fluid animated" alt={props.imgAlt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Common;