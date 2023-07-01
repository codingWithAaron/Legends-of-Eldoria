import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Intro(){
 return (
    <>
        <div className="container d-flex flex-column m-5">
            <div className="text-center">
                <h3>Once upon a time, in the mystical land of Eldoria, you find yourself sitting in the bustling tavern of Thornwood. The aroma of hearty stew and the sound of merry laughter fill the air. As a weary traveler, you seek solace and rest, but fate has something else in store for you.</h3>
            </div>
            <div className="text-center mt-5">
                <Link to="/initialchoices" className="btn btn-danger">Continue</Link>
            </div>
        </div>
    </>
 )
}

export default Intro