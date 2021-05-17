import React from "react";

const Card = (props) => {
    return <>
        <div className="col-md-4 col-10 mx-auto">
            <div class="card">
                <img class="card-img-top" src={props.imgSource} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{props.titleName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </>

}

export default Card;