import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Start(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
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