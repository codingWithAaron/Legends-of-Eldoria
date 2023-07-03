import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image1 from "../accept/images/fotor-ai-20230703103355.jpg"

function Start(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="d-flex justify-content-center">
                <img className="w-50 mb-4" src={image1} alt="town of thornwood"/>
            </div>
            <div className="text-center">
                <h2>Welcome Adventurer! You're journey starts here!</h2>
            </div>
            <div className="text-center mt-5">
                <Link to="/intro" className="btn btn-danger">Start</Link>
            </div>
        </div>
    </>
 )
}

export default Start