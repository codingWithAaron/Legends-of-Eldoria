import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ThankYou(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <div className="mb-5">
                    <h5>Thank you for playing my game! It is a work in progress and much more will be added in the future. As my skills as a Software Engineer improve, so too will this game and many more projects to come!</h5>
                    <h5>See you next time for more adventures in the wonderous land of Eldoria!</h5>
                </div>
            </div>
            <div className="text-center mt-5 d-flex justify-content-center">
                <div className="me-5">
                    <Link to="/" className="btn btn-danger">Return to Start</Link>
                </div>
            </div>
        </div>
    </>
 )
}

export default ThankYou