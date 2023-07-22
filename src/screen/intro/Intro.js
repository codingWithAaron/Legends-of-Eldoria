import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import image1 from "../accept/images/fotor-ai-20230703102627.jpg"

function Intro(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="d-flex justify-content-center">
                <img className="w-25 mb-4" src={image1} alt="hidden village"/>
            </div>
            <div className="text-center mt-3">
                <h5>Once upon a time, in the mystical land of Eldoria, you find yourself sitting in the bustling tavern of Thornwood. The aroma of hearty stew and the sound of merry laughter fill the air. As a weary traveler, you seek solace and rest, but fate has something else in store for you.</h5>
            </div>
            <div className="text-center mt-5">
                <Link to="/initialchoices" className="btn btn-danger">Continue</Link>
            </div>
        </div>
    </>
 )
}

export default Intro